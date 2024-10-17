const CHARACTER_LIMIT = 200;

class WordLimit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.charactersLeft = CHARACTER_LIMIT;
    this.handleKeyup = this.updateCharacterLimitInfo.bind(this);
  }

  connectedCallback() {
    this.render();
    this.textarea = this.shadowRoot.querySelector("textarea"); //cache these to reduce DOM queries
    this.message = this.shadowRoot.querySelector("p");
    this.textarea.addEventListener("keyup", this.handleKeyup);
  }

  disconnectedCallback() {
    this.textarea.removeEventListener("keyup", this.handleKeyup); //clean up
  }

  updateCharacterLimitInfo() {
    const characterCount = this.getCharacterCount();
    this.charactersLeft = CHARACTER_LIMIT - characterCount;
    this.message.textContent = `You have ${this.charactersLeft} characters remaining`;
  }

  getCharacterCount() {
    return this.textarea.value.length;
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
    :host {
      display: grid;
      gap: var(--theme-spacing--1);
      border: 0;
      background: var(--theme-color--block);
      border-radius: var(--theme-border-radius);
      box-shadow: var(--theme-box-shadow);
      max-width: var(--theme-spacing--linelength);
      padding: 0 var(--theme-spacing--1) var(--theme-spacing--3);
    }
    textarea {
      background: var(--theme-color--paper);
      border: 0;
      border-radius: var(--theme-border-radius);
    }
    p {
      margin: 0;
    }
    </style>
    <h3>Example character limit comment component</h3>
    <label for="comment">Please comment in the text area</label>
    <textarea
      id="comment"
      name="comment"
      rows="5"
      maxlength="${CHARACTER_LIMIT}"></textarea>
    <p aria-live="polite">You have <strong>${CHARACTER_LIMIT}</strong> characters remaining</p>
          `;
  }
}

window.customElements.define("word-limit", WordLimit);
