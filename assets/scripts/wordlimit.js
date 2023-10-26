class WordLimit extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.charactersLeft = 200;
  }

  connectedCallback() {
    this.render();
    const input = this.shadowRoot.querySelector("#wordlimit__input");
    input.addEventListener("keyup", () => {
      this.updateCharacterLimitInfo();
    });
  }

  updateCharacterLimitInfo() {
    const CHARACTER_LIMIT = 200;
    const characterCount = this.getCharacterCount();
    this.charactersLeft = CHARACTER_LIMIT - characterCount;
    const limitInfo = this.shadowRoot.querySelector("#wordlimit__limit-info");
    limitInfo.innerText = `You have ${this.charactersLeft} characters remaining`;
  }

  getCharacterCount() {
    const input = this.shadowRoot.querySelector("#wordlimit__input");
    return input.value.length;
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
    .wordlimit__content {
      display: grid;
      width: 50%;
    }
    
    .wordlimit__content > label {
      margin-bottom: var(--theme-spacing--offset);
    }
    </style>
    <section class="wordlimit__content">
    <h3>Example character limit comment component</h3>
    <label for="wordlimit__input"
      >Please enter your comment in the text area below
    </label>
    <textarea
      id="wordlimit__input"
      name="comment-input"
      rows="5"
      maxlength="200"></textarea>
    <p id="wordlimit__limit-info">You have 200 characters remaining</p>
  </section>
          `;
  }
}

window.customElements.define("word-limit", WordLimit);
