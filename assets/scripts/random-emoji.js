class RandomEmoji extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const emojiList = ["🎈", "🚌", "🍔", "🕹️", "🎛️", "🔑", "🪣", "⚙️", "📖"];
    const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];

    this.shadowRoot.innerHTML = `
      <slot>${randomEmoji}</slot>
    `;
  }
}

customElements.define("random-emoji", RandomEmoji);
