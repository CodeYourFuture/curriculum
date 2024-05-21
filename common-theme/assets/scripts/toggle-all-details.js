class ToggleAllDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  connectedCallback() {
    this.render();
    this.cacheDOM();
    this.attachListener();
    this.toggleOnHashChange();
  }

  disconnectedCallback() {
    this.toggleButton.removeEventListener("click", this.toggleDetails);
  }

  cacheDOM() {
    this.details = [...document.querySelectorAll("details")];
    this.toggleButton = this.querySelector('[slot="button"]');
  }

  toggleDetails() {
    this.details.forEach((detail) => {
      detail.open = !detail.open;
    });
  }

  attachListener() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener("click", this.toggleDetails);
    }
  }

  toggleOnHashChange() {
    if (location.hash === "#toggle-details") {
      this.toggleDetails();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `<slot name="button"></slot>`;
  }
}

customElements.define("toggle-all-details", ToggleAllDetails);
