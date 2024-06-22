import CMS from "https://unpkg.com/@staticcms/app@^4.0.0/dist/static-cms-app.js";

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

const GuidePreview = async ({ entry }) => {
  const cssUrl = await fetchCssUrl();
  const template = document
    .getElementById("guide-preview")
    .content.cloneNode(true);

  if (cssUrl) {
    template.querySelector("#site-css").href = cssUrl;
  }

  template.querySelector(".c-page-header__title").innerText = entry.getIn([
    "data",
    "title",
  ]);
  template.querySelector("#emoji").innerText = entry.getIn(["data", "emoji"]);
  template.querySelector("#description").innerText = entry.getIn([
    "data",
    "description",
  ]);
  template.querySelector("#body").innerHTML = entry.getIn(["data", "body"]);

  return template;
};

CMS.registerPreviewTemplate("guide", GuidePreview);
