class TabPanels extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this._addEventListeners();

    if (window.location.hash) {
      this._handleFragmentNavigation(window.location.hash);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                /* These styles are in components/tabs.scss for now */
            </style>
            <slot></slot>
        `;
  }

  _addEventListeners() {
    this.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-toggle") === "tab") {
        this._handleTabClick(e);
      }
    });

    window.addEventListener("hashchange", (e) => {
      this._handleFragmentNavigation(window.location.hash);
    });
  }

  _handleFragmentNavigation(hash) {
    const tabToFocus = this.querySelector(
      `[aria-controls="${hash.substring(1)}"]`
    );

    if (tabToFocus) {
      this._handleTabClick({ target: tabToFocus, preventDefault: () => {} });
    }
  }

  _handleTabClick(e) {
    e.preventDefault();
    const clickedTab = e.target;
    const tabPanel = this.querySelector(
      "#" + clickedTab.getAttribute("aria-controls")
    );
    const tabs = this.querySelectorAll('[data-toggle="tab"]');
    const tabPanels = this.querySelectorAll('[role="tabpanel"]');
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
      tab.classList.remove("is-active");
    });
    tabPanels.forEach((panel) => {
      panel.classList.remove("is-active");
    });
    clickedTab.setAttribute("aria-selected", "true");
    clickedTab.classList.add("is-active");
    if (tabPanel) {
      tabPanel.classList.add("is-active");
    }
  }
}

window.customElements.define("tab-panels", TabPanels);
