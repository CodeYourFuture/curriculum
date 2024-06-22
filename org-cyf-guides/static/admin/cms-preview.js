const { h, useState, useEffect } = window.React; // Aliases for Static CMS's React components

// Fetch the versioned CSS URL from the home page
const fetchCssUrl = async () => {
  try {
    const response = await fetch("/");
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const linkElement = doc.querySelector(
      'link[rel="stylesheet"][href*=".css"]'
    );
    return linkElement ? linkElement.href : "";
  } catch (error) {
    console.error("Error fetching CSS URL:", error);
    return "";
  }
};

// Define the GuidePreview component using React
const GuidePreview = ({ entry, widgetFor }) => {
  const [cssUrl, setCssUrl] = useState("");

  useEffect(() => {
    const loadCssUrl = async () => {
      const url = await fetchCssUrl();
      setCssUrl(url);
    };
    loadCssUrl();
  }, []);

  return h(
    "div",
    {},
    h("link", { id: "site-css", rel: "stylesheet", href: cssUrl }),
    h(
      "article",
      {},
      h(
        "header",
        { className: "c-page-header" },
        h(
          "div",
          { className: "c-page-header__container" },
          h(
            "div",
            { className: "c-page-header__breadcrumbs" },
            h(
              "nav",
              { className: "c-breadcrumbs" },
              h(
                "ol",
                { className: "c-breadcrumbs__list" },
                h(
                  "li",
                  { className: "c-breadcrumbs__item" },
                  h(
                    "a",
                    { className: "c-breadcrumbs__link", href: "#" },
                    "Dummy Preview"
                  )
                )
              )
            )
          ),
          h(
            "h1",
            { className: "c-page-header__title e-heading__1" },
            h(
              "span",
              { className: "c-emoji", id: "emoji" },
              entry.getIn(["data", "emoji"])
            ),
            entry.getIn(["data", "title"])
          ),
          h(
            "h2",
            {
              className: "c-page-header__description e-heading__3",
              id: "description",
            },
            entry.getIn(["data", "description"])
          )
        )
      ),
      h(
        "section",
        { className: "l-page__main c-copy", id: "body" },
        widgetFor("body")
      )
    )
  );
};

// Register the GuidePreview template
window.addEventListener("DOMContentLoaded", () => {
  if (window.CMS) {
    window.CMS.registerPreviewTemplate("guide", GuidePreview);
  } else {
    console.error("CMS not found");
  }
});
