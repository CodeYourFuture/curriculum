class DarkMode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setDarkMode();
  }

  setDarkMode() {
    const isDarkModeOn = localStorage.getItem("isDarkMode");

    if (isDarkModeOn === "1") {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }

  toggleDarkMode() {
    const isDarkModeOn = localStorage.getItem("isDarkMode");
    if (isDarkModeOn === "1") {
      localStorage.removeItem("isDarkMode");
    } else {
      localStorage.setItem("isDarkMode", "1");
    }
  }

  render() {
    this.shadowRoot.innerHTML = `<button id="mode-toggle" type="button" 
    class="e__button--toggle e-button--icon l-footer__mode">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="e-icon e__button__icon e-icon--moon">
      <path stroke-linecap="round" stroke-linejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
    <span class="is-invisible">Toggle between light and dark mode</span>
    </button>`;

    // Replace the host element with its shadow content
    const hostElement = document.querySelector('dark-mode');
    if (hostElement && hostElement.shadowRoot) {
      const shadowRoot = hostElement.shadowRoot;
      const shadowContent = shadowRoot.innerHTML;

      hostElement.outerHTML = shadowContent;
    }

    const toggleButton = document.getElementById("mode-toggle");
    toggleButton.addEventListener("click", () => {
      this.toggleDarkMode();
      this.setDarkMode();
    });
  }
}

customElements.define("dark-mode", DarkMode);