document.addEventListener("DOMContentLoaded", () => {
  const searchForms = document.querySelectorAll(".search-box");
  const chatForms = document.querySelectorAll(".chat-input");
  const articleCards = Array.from(document.querySelectorAll("[data-article-card]"));
  const articleList = document.querySelector("[data-article-list]");
  const categoryButtons = Array.from(document.querySelectorAll("[data-category-filter]"));
  const articleEmptyState = document.querySelector("[data-article-empty]");
  const filterSummary = document.querySelector("[data-filter-summary]");
  let selectedCategory = "";

  function rootHref(href) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("/") || href.startsWith("#")) {
      return href;
    }

    const rootPrefix = document.body.dataset.rootPath || (window.location.pathname.includes("/articles/") ? "../" : "");
    return `${rootPrefix}${href}`;
  }

  function activeArticleSearchValue() {
    return document.querySelector("#page-search")?.value.trim() || "";
  }

  function selectedCategoryLabel() {
    const activeButton = categoryButtons.find((button) => button.dataset.categoryFilter === selectedCategory);
    return activeButton?.textContent.trim() || "";
  }

  function updateCategoryButtons() {
    categoryButtons.forEach((button) => {
      const isActive = button.dataset.categoryFilter === selectedCategory;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateFilterSummary(visibleCount, query) {
    if (!filterSummary) return;

    const label = selectedCategoryLabel();
    const articleWord = visibleCount === 1 ? "article" : "articles";
    if (label && query) {
      filterSummary.textContent = `${visibleCount} ${articleWord} in ${label}`;
      return;
    }
    if (label) {
      filterSummary.textContent = `${visibleCount} ${articleWord} in ${label}`;
      return;
    }
    if (query) {
      filterSummary.textContent = `${visibleCount} matching ${articleWord}`;
      return;
    }
    filterSummary.textContent = "Showing all articles";
  }

  function filterArticles(query = activeArticleSearchValue()) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    let visibleCount = 0;

    articleCards.forEach((card) => {
      const haystack = (card.dataset.search || card.textContent || "").toLowerCase();
      const categories = (card.dataset.categories || "").split(/\s+/).filter(Boolean);
      const matchesTerms = terms.every((term) => haystack.includes(term));
      const matchesCategory = !selectedCategory || categories.includes(selectedCategory);
      const isVisible = matchesTerms && matchesCategory;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    updateCategoryButtons();
    updateFilterSummary(visibleCount, query);
    if (articleEmptyState) articleEmptyState.hidden = visibleCount > 0;
  }

  function applyCategoryFromHash() {
    const hashCategory = categoryButtons.find((button) => button.id === window.location.hash.slice(1));
    selectedCategory = hashCategory?.dataset.categoryFilter || "";
    filterArticles();
  }

  searchForms.forEach((searchForm) => {
    const input = searchForm.querySelector("input");
    const isArticleSearch = Boolean(articleList && input?.id === "page-search");

    if (isArticleSearch) {
      input.addEventListener("input", () => filterArticles(input.value.trim()));
    }

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (input?.value.trim()) {
        if (isArticleSearch) {
          filterArticles(input.value.trim());
          window.location.hash = "articles";
          return;
        }
        window.location.href = rootHref("knowledge-hub.html#articles");
      }
    });
  });

  categoryButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      const category = button.dataset.categoryFilter || "";
      selectedCategory = selectedCategory === category ? "" : category;
      filterArticles();
      articleList?.scrollTo({ top: 0, behavior: "smooth" });

      if (selectedCategory && button.id) {
        history.replaceState(null, "", `#${button.id}`);
      } else {
        history.replaceState(null, "", window.location.pathname);
      }
    });
  });

  if (categoryButtons.length > 0) {
    window.addEventListener("hashchange", applyCategoryFromHash);
    applyCategoryFromHash();
  } else if (articleCards.length > 0) {
    filterArticles();
  }

  chatForms.forEach((chatForm) => {
    chatForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = chatForm.querySelector("input");
      const value = input?.value.trim();
      if (!value) return;

      const chatBubble = document.querySelector(".chat-bubble");
      if (chatBubble) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = value;
        chatBubble.appendChild(button);
      }
      input.value = "";
    });
  });

  document.querySelectorAll("[data-link]").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = rootHref(item.dataset.link);
    });
  });

  document.querySelectorAll(".page-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.classList.add("submitted");
      const button = form.querySelector("button");
      if (button) button.textContent = "Feedback noted";
    });
  });
});
