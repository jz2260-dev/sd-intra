const iconSprite = `
  <svg class="sprite" aria-hidden="true">
    <symbol id="icon-home" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h5v-6h3v6h5V9.5"/></symbol>
    <symbol id="icon-grid" viewBox="0 0 24 24"><rect x="4" y="4" width="5" height="5" rx="1"/><rect x="15" y="4" width="5" height="5" rx="1"/><rect x="4" y="15" width="5" height="5" rx="1"/><rect x="15" y="15" width="5" height="5" rx="1"/></symbol>
    <symbol id="icon-dashed" viewBox="0 0 24 24"><path d="M5 5h3M16 5h3M5 19h3M16 19h3M5 8v3M19 8v3M5 16v-3M19 16v-3"/></symbol>
    <symbol id="icon-clipboard" viewBox="0 0 24 24"><rect x="6" y="5" width="12" height="16" rx="2"/><path d="M9 5.5C9 4.1 10.1 3 11.5 3h1C13.9 3 15 4.1 15 5.5V7H9z"/><path d="M9 11h6M9 15h6"/></symbol>
    <symbol id="icon-monitor" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="11" rx="1.8"/><path d="M9 20h6M12 16v4"/></symbol>
    <symbol id="icon-settings" viewBox="0 0 24 24"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/><path d="M3.5 13.5v-3l2.2-.7c.2-.7.5-1.3.8-1.9l-1-2.1 2.2-2.1 2 1c.6-.3 1.2-.5 1.9-.6l.8-2.1h3l.8 2.1c.7.1 1.3.4 1.9.7l2-1 2.2 2.1-1 2.1c.4.6.7 1.2.9 1.9l2.1.7v3l-2.1.7c-.2.7-.5 1.3-.9 1.9l1 2.1-2.2 2.1-2-1c-.6.3-1.2.5-1.9.7l-.8 2.1h-3l-.8-2.1c-.7-.2-1.3-.4-1.9-.7l-2 1-2.2-2.1 1-2.1c-.3-.6-.6-1.2-.8-1.9z"/></symbol>
    <symbol id="icon-chart" viewBox="0 0 24 24"><rect x="4" y="3" width="4" height="18" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="16" y="6" width="4" height="15" rx="1"/><path d="M4 21h17"/></symbol>
    <symbol id="icon-users" viewBox="0 0 24 24"><path d="M8.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 20c.4-3.6 2.3-5.4 5.5-5.4S13.6 16.4 14 20"/><path d="M16 12a3 3 0 1 0 0-6M15.5 15c2.7.1 4.4 1.7 4.8 5"/></symbol>
    <symbol id="icon-message" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="12" rx="2"/><path d="m8 17-3.5 4v-4M8 11h.1M12 11h.1M16 11h.1"/></symbol>
    <symbol id="icon-bell" viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9z"/><path d="M10 21h4"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m16.3 16.3 4.2 4.2"/></symbol>
    <symbol id="icon-chevron" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></symbol>
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></symbol>
    <symbol id="icon-bolt" viewBox="0 0 24 24"><path d="m13 2-8 12h6l-1 8 8-12h-6z"/></symbol>
    <symbol id="icon-folder" viewBox="0 0 24 24"><path d="M3.5 7.5h6l2 2H20a1.5 1.5 0 0 1 1.5 1.5v7A2.5 2.5 0 0 1 19 20.5H5A2.5 2.5 0 0 1 2.5 18V9A1.5 1.5 0 0 1 4 7.5z"/><path d="M3.5 7.5V6A1.5 1.5 0 0 1 5 4.5h4.2l2 2H20"/></symbol>
    <symbol id="icon-megaphone" viewBox="0 0 24 24"><path d="M4 14h4l10 4V6L8 10H4z"/><path d="M8 14v5a2 2 0 0 0 4 0v-3.4"/><path d="M20 8.5c1.2 1 1.2 4 0 5"/></symbol>
    <symbol id="icon-timer" viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6M12 2v3"/></symbol>
    <symbol id="icon-board" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="10" rx="1"/><path d="M8 19h8M12 15v4M7 9h4M7 12h2M14 10h3"/></symbol>
    <symbol id="icon-file" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></symbol>
    <symbol id="icon-fire" viewBox="0 0 24 24"><path d="M12 22c4.1 0 7-2.8 7-6.6 0-2.5-1.4-4.8-4.1-6.8.1 2.1-.8 3.2-2.1 3.8.4-3.1-.8-5.7-3.8-8.4.4 3.7-1.5 5.4-2.8 7.2A7.4 7.4 0 0 0 5 15.4C5 19.2 7.9 22 12 22z"/><path d="M12 19c1.7 0 2.9-1.1 2.9-2.6 0-1.1-.5-1.9-1.6-2.6 0 1-.5 1.5-1.2 1.9.1-1.5-.5-2.7-1.8-4-.1 2-1.2 2.9-1.2 4.7 0 1.5 1.2 2.6 2.9 2.6z"/></symbol>
    <symbol id="icon-alert" viewBox="0 0 24 24"><path d="M12 3 2.5 20h19z"/><path d="M12 8v6M12 17.5h.1"/></symbol>
    <symbol id="icon-bot" viewBox="0 0 24 24"><rect x="5" y="7" width="14" height="11" rx="3"/><path d="M12 7V3M9 3h6M8.5 12h.1M15.5 12h.1M10 16h4M3 13h2M19 13h2"/></symbol>
    <symbol id="icon-laptop" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="10" rx="1.5"/><path d="M3 19h18l-2-4H5z"/></symbol>
    <symbol id="icon-user-lock" viewBox="0 0 24 24"><path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21c.5-4.2 2.8-6.3 7-6.3 1.1 0 2.1.2 3 .5"/><rect x="15" y="13" width="6" height="7" rx="1"/><path d="M17 13v-1.4a2 2 0 1 1 4 0V13"/></symbol>
    <symbol id="icon-mail" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m4 7 8 7 8-7"/></symbol>
    <symbol id="icon-classroom" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20h10M12 16v4M8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM5.5 14c.5-1.4 1.3-2 2.5-2s2 .6 2.5 2M15 9h3M15 12h3"/></symbol>
    <symbol id="icon-printer" viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="6" rx="1"/><rect x="6" y="14" width="12" height="7" rx="1"/><rect x="4" y="8" width="16" height="9" rx="2"/><path d="M7 17h10M8 12h.1"/></symbol>
    <symbol id="icon-wifi" viewBox="0 0 24 24"><path d="M4 9c5.3-4.7 10.7-4.7 16 0M7 13c3.3-3 6.7-3 10 0M10 17c1.3-1 2.7-1 4 0"/><path d="M12 20h.1"/></symbol>
    <symbol id="icon-building" viewBox="0 0 24 24"><path d="M4 21V4h9v17M13 9h7v12"/><path d="M7 8h2M7 12h2M7 16h2M16 13h1M16 17h1M3 21h19"/></symbol>
    <symbol id="icon-lock" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3M12 15v2"/></symbol>
    <symbol id="icon-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></symbol>
    <symbol id="icon-cap" viewBox="0 0 24 24"><path d="m3 8 9-4 9 4-9 4z"/><path d="M7 10v5c2.8 2 7.2 2 10 0v-5M20 9v7"/></symbol>
  </svg>
`;

const navItems = [
  { id: "home", label: "Home", href: "index.html", icon: "home" },
  { id: "knowledge", label: "Knowledge Hub", href: "knowledge-hub.html", icon: "grid" },
  { id: "sops", label: "SOPs & Guides", href: "sops-guides.html", icon: "dashed" },
  { id: "catalog", label: "Service Catalog", href: "service-catalog.html", icon: "clipboard" },
  { id: "training", label: "Training", href: "training.html", icon: "monitor" },
  { id: "assistant", label: "AI Assistant", href: "ai-assistant.html", icon: "settings" },
  { id: "reports", label: "Reports & Tools", href: "reports-tools.html", icon: "chart" },
  { id: "directory", label: "Team Directory", href: "team-directory.html", icon: "users" }
];

const utilityItems = [
  { id: "feedback", label: "Submit Feedback", href: "feedback.html", icon: "message" },
  { id: "admin", label: "Site Admin", href: "site-admin.html", icon: "settings" }
];

function rootHref(href) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("/") || href.startsWith("#")) {
    return href;
  }

  const rootPrefix = document.body.dataset.rootPath || (window.location.pathname.includes("/articles/") ? "../" : "");
  return `${rootPrefix}${href}`;
}

function icon(name, className = "") {
  const classAttr = className ? ` class="${className}"` : "";
  return `<svg${classAttr}><use href="#icon-${name}"></use></svg>`;
}

function renderBrand() {
  return `
    <div class="brand">
      <span class="crest" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 4c.9 1.5 1 2.9.3 4.2 1.2-.4 2.2-1.3 2.7-2.7.9 1.7.6 3.7-.8 5.2-.6.6-1.3 1-2.2 1.2-.9-.2-1.6-.6-2.2-1.2C8.4 9.2 8.1 7.2 9 5.5c.5 1.4 1.5 2.3 2.7 2.7C11 6.9 11.1 5.5 12 4z"/>
          <path d="M12 11v8M8.5 14.5h7M10 19h4"/>
        </svg>
      </span>
      <span class="brand-text">NYU <i></i> STERN</span>
    </div>
  `;
}

function renderNavLink(item, activePage, compact = false) {
  const classes = ["nav-item"];
  if (compact) classes.push("compact");
  const isActive = item.id === activePage;
  if (isActive) classes.push("active");
  return `
    <a class="${classes.join(" ")}" href="${rootHref(item.href)}"${isActive ? ' aria-current="page"' : ""}>
      ${icon(item.icon)}
      <span>${item.label}</span>
      ${isActive ? icon("chevron", "mobile-nav-cue") : ""}
    </a>
  `;
}

function renderSidebar() {
  const activePage = document.body.dataset.page || "home";
  const sidebarRoot = document.querySelector("#site-sidebar");
  if (!sidebarRoot) return;

  sidebarRoot.innerHTML = `
    <aside class="sidebar" aria-label="Primary navigation">
      ${renderBrand()}
      <nav class="nav-list">
        ${navItems.map((item) => renderNavLink(item, activePage)).join("")}
      </nav>
      <div class="sidebar-footer">
        ${utilityItems.map((item) => renderNavLink(item, activePage, true)).join("")}
      </div>
    </aside>
  `;
}

function renderTopbar() {
  const topbar = document.querySelector("#site-topbar");
  if (!topbar) return;

  topbar.innerHTML = `
    <div class="title-lockup">
      <div class="app-icon">
        ${icon("monitor")}
      </div>
      <div>
        <h1>Stern IT Knowledge Hub</h1>
        <p>Find answers. Solve problems. Support our community.</p>
      </div>
    </div>

    <div class="account-area">
      <a class="bell-button" href="${rootHref("announcements.html")}" aria-label="Notifications">
        ${icon("bell")}
        <span>3</span>
      </a>
      <a class="user-card" href="${rootHref("team-directory.html#john-doe")}">
        <div class="avatar">JD</div>
        <div>
          <strong>John Doe</strong>
          <small>Service Desk</small>
        </div>
        ${icon("chevron", "down")}
      </a>
    </div>
  `;
}

function bindMobileSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const activeItem = sidebar.querySelector(".nav-item.active");
  if (!activeItem) return;

  activeItem.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 760px)").matches) return;

    event.preventDefault();
    const isExpanded = sidebar.classList.toggle("mobile-nav-open");
    activeItem.setAttribute("aria-expanded", String(isExpanded));
  });

  document.addEventListener("click", (event) => {
    if (!window.matchMedia("(max-width: 760px)").matches) return;
    if (sidebar.contains(event.target)) return;
    sidebar.classList.remove("mobile-nav-open");
    activeItem.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const iconRoot = document.querySelector("#site-icons");
  if (iconRoot) iconRoot.innerHTML = iconSprite;
  renderSidebar();
  renderTopbar();
  bindMobileSidebar();
});
