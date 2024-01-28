class DarkMode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isDarkMode = localStorage.getItem("isDarkMode") === "1";
    this.toggleButton = null;
  }

  connectedCallback() {
    this.render();
    this.updateBodyClass();
    this.attachListener();
  }

  toggleDarkMode = () => {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem("isDarkMode", this.isDarkMode ? "1" : "0");
    this.updateBodyClass();
  };

  updateBodyClass() {
    document.body.classList.toggle("is-dark-mode", this.isDarkMode);
    document.body.classList.toggle("is-light-mode", !this.isDarkMode);
  }

  attachListener() {
    this.toggleButton = this.querySelector('[slot="button"]');
    if (this.toggleButton instanceof Element) {
      this.toggleButton.addEventListener("click", this.toggleDarkMode);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `<slot name="button"></slot>`;
  }
}

customElements.define("dark-mode", DarkMode);