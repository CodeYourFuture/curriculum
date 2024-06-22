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
// Function to fetch the versioned CSS URL from the home page
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

// Function to inject CSS into the preview iframe
const injectCssIntoIframe = async () => {
  const cssUrl = await fetchCssUrl();
  if (!cssUrl) {
    console.error("No CSS URL found to inject");
    return;
  }

  // Wait for the CMS to be initialized and the iframe to be ready
  window.addEventListener("load", () => {
    const iframe = document.querySelector('iframe[name="preview-pane"]');
    if (!iframe) {
      console.error("Preview iframe not found");
      return;
    }

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    const linkElement = iframeDocument.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = cssUrl;
    iframeDocument.head.appendChild(linkElement);

    console.log("CSS injected into iframe:", cssUrl);
  });
};

// Initialize the function
injectCssIntoIframe();
