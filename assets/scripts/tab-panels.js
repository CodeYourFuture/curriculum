class TabPanels extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this._addEventListeners();
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
  }

  _handleTabClick(e) {
    e.preventDefault();
    const clickedTab = e.target;
    const tabPanel = this.querySelector(clickedTab.getAttribute("href"));
    const tabs = this.querySelectorAll('[data-toggle="tab"]');
    const tabPanels = this.querySelectorAll('[role="tabpanel"]');
    tabs.forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
      tab.classList.remove("is-active");
    });
    tabPanels.forEach((panel) => {
      panel.setAttribute("aria-hidden", "true");
      panel.classList.remove("is-active");
    });
    clickedTab.setAttribute("aria-selected", "true");
    clickedTab.classList.add("is-active");
    if (tabPanel) {
      tabPanel.setAttribute("aria-hidden", "false");
      tabPanel.classList.add("is-active");
    }
  }
}

window.customElements.define("tab-panels", TabPanels);
