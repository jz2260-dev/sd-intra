(function () {
  const sourceUrl = window.NYU_STATUS_SOURCE_URL || "https://support.nyu.edu/esc?id=services_status";
  const snapshot = window.NYU_STATUS_SNAPSHOT || { outages: [] };
  const proxyUrl = window.NYU_STATUS_PROXY_URL || "";

  function cleanText(value) {
    const div = document.createElement("div");
    div.innerHTML = String(value || "");
    return (div.textContent || div.innerText || "")
      .replace(/\s+/g, " ")
      .replace(/\s+:/g, ":")
      .trim();
  }

  function extractServiceNowOutages(payload) {
    const widgets = [];

    function walk(node) {
      if (!node || typeof node !== "object") return;
      if (node.widget?.data?.outages) widgets.push(node.widget.data.outages);
      Object.values(node).forEach(walk);
    }

    walk(payload?.result || payload);
    const outages = widgets.find(Boolean) || payload?.outages || [];
    return outages.map((outage) => ({
      sys_id: outage.sys_id,
      service: outage.ci || outage.service || "NYU service",
      state: outage.wState || outage.state || "",
      type: outage.typeDisplay || outage.type || "Status Update",
      severity: outage.color || outage.severity || "yellow",
      begin: outage.begin || "",
      end: outage.end || "",
      details: cleanText(outage.details)
    }));
  }

  async function loadStatus() {
    if (proxyUrl) {
      try {
        const response = await fetch(proxyUrl, { headers: { accept: "application/json" } });
        if (!response.ok) throw new Error(`Status proxy returned ${response.status}`);
        return {
          source: "live",
          fetchedAt: new Date().toISOString(),
          outages: extractServiceNowOutages(await response.json())
        };
      } catch (error) {
        console.info("Using saved NYU status snapshot:", error.message);
      }
    }

    return {
      source: "snapshot",
      fetchedAt: snapshot.fetchedAt,
      outages: snapshot.outages || []
    };
  }

  function severityClass(severity) {
    const value = String(severity || "").toLowerCase();
    if (value.includes("red") || value.includes("outage")) return "red";
    if (value.includes("orange") || value.includes("degradation")) return "orange-status";
    if (value.includes("green") || value.includes("success")) return "green";
    return "yellow";
  }

  function statusGlyph(severity) {
    return severityClass(severity) === "green" ? "OK" : "!";
  }

  function formatDateTime(value) {
    if (!value) return "";
    const date = new Date(String(value).replace(" ", "T"));
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function formatWindow(alert) {
    const begin = formatDateTime(alert.begin);
    const end = formatDateTime(alert.end);
    if (begin && end) return `${begin} to ${end}`;
    if (begin) return `Begins ${begin}`;
    if (end) return `Ends ${end}`;
    return "Timing not listed";
  }

  function shortDetails(alert, maxLength = 142) {
    const text = cleanText(alert.details);
    if (!text) return formatWindow(alert);
    return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
  }

  function renderNoAlerts(container, full = false) {
    const item = `
      <${full ? "article" : "div"} class="${full ? "card page-card alert-detail-card" : "alert-item"}">
        <span class="status green">OK</span>
        <div>
          <strong>No NYU systems are reporting an issue</strong>
          <p>Checked against NYU Service Status snapshot.</p>
        </div>
      </${full ? "article" : "div"}>
    `;
    container.innerHTML = item;
  }

  function renderHome(container, outages) {
    if (!outages.length) {
      renderNoAlerts(container, false);
      return;
    }

    container.innerHTML = outages.slice(0, 3).map((alert) => `
      <a class="alert-item nyu-alert-item" href="alerts.html#nyu-alert-${alert.sys_id}" title="${shortDetails(alert, 240)}">
        <span class="status ${severityClass(alert.severity)}">${statusGlyph(alert.severity)}</span>
        <div>
          <strong>${alert.service}</strong>
          <p>${alert.type} - ${formatWindow(alert)}</p>
        </div>
      </a>
    `).join("");
  }

  function renderFull(container, outages) {
    if (!outages.length) {
      renderNoAlerts(container, true);
      return;
    }

    container.innerHTML = outages.map((alert) => `
      <article class="card page-card alert-detail-card" id="nyu-alert-${alert.sys_id}">
        <div class="card-title alert-detail-title">
          <span class="status ${severityClass(alert.severity)}">${statusGlyph(alert.severity)}</span>
          <div>
            <h2>${alert.service}</h2>
            <p>${alert.state ? `${alert.state} - ` : ""}${alert.type} - ${formatWindow(alert)}</p>
          </div>
        </div>
        <p class="card-copy">${shortDetails(alert, 420)}</p>
        <a class="link-action" href="${sourceUrl}" target="_blank" rel="noreferrer">Open in NYU Service Status <svg><use href="#icon-arrow"></use></svg></a>
      </article>
    `).join("");
  }

  function updateSummary(outages, status) {
    const count = document.querySelector("[data-nyu-status-count]");
    const updated = document.querySelector("[data-nyu-status-updated]");
    if (count) count.textContent = outages.length ? `${outages.length} current NYU status item${outages.length === 1 ? "" : "s"}` : "No current NYU status items";
    if (updated) {
      const source = status.source === "live" ? "Live feed" : "Saved snapshot";
      updated.textContent = `${source} from ${status.fetchedAt || "NYU Service Status"}`;
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const targets = document.querySelectorAll("[data-nyu-alerts]");
    if (!targets.length) return;

    const status = await loadStatus();
    const outages = status.outages || [];
    updateSummary(outages, status);

    targets.forEach((container) => {
      if (container.dataset.nyuAlerts === "full") {
        renderFull(container, outages);
      } else {
        renderHome(container, outages);
      }
    });
  });
})();
