// a vanilla web component that creates a random sentence from these component parts:
// Sentence skeleton:
// An app that [action] [object] for [audience] to [benefit]
// Example: An app that generates shopping lists for blind people to save time
class RandomProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `An app that [action] [object] for [audience] to [benefit]`;

    this.actions = [
      "generates",
      "creates",
      "builds",
      "makes",
      "constructs",
      "designs",
      "invents",
      "develops",
      "produces",
      "assembles",
      "composes",
      "originates",
      "devises",
      "forms",
      "generates",
      "imagines",
      "invents",
      "produces",
      "thinks up",
      "visualises",
      "displays",
      "computes",
      "interprets",
    ];
    this.objects = [
      "maps",
      "products",
      "pictures",
      "answers",
      "directions",
      "an API",
      "palettes",
      "patterns",
      "menus",
      "shopping lists",
      "lyrics",
      "quotes",
      "recommendations",
      "playlists",
    ];
    this.audience = [
      "developers",
      "programmers",
      "coders",
      "users",
      "blind people",
      "people from London",
      "fans",
      "women",
      "men",
      "refugees",
      "trainees",
      "teachers",
      "designers",
    ];
    this.benefit = [
      "save time",
      "save money",
      "save effort",
      "save energy",
      "save the universe",
      "fight crime",
      "explore possibilities",
      "find new friends",
      "get the cheapest one",
      "find the best one",
      "find love",
      "develop new skills",
    ];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.generateSentence();
  }

  generateSentence() {
    const action = this.getRandomItem(this.actions);
    const object = this.getRandomItem(this.objects);
    const audience = this.getRandomItem(this.audience);
    const benefit = this.getRandomItem(this.benefit);
    return `An app that ${action} ${object} for ${audience} to ${benefit}`;
  }

  getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
}

customElements.define("random-product", RandomProduct);
