document.addEventListener("DOMContentLoaded", () => {
  const searchForms = document.querySelectorAll(".search-box");
  const chatForms = document.querySelectorAll(".chat-input");
  const articleCards = Array.from(document.querySelectorAll("[data-article-card]"));
  const articleList = document.querySelector("[data-article-list]");

  function filterArticles(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    articleCards.forEach((card) => {
      const haystack = (card.dataset.search || card.textContent || "").toLowerCase();
      card.hidden = terms.length > 0 && !terms.every((term) => haystack.includes(term));
    });
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
        window.location.href = `knowledge-hub.html#articles`;
      }
    });
  });

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
      window.location.href = item.dataset.link;
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
