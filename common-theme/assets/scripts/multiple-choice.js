//this is a basic quiz component that will be used in the multiple choice shortcode
// it expects a single question with multiple choice answers
// it expects a form element inside a slot named "quiz"
// and a slot named "feedback" where feedback will be displayed
// the value of the data-correct attribute should be the index of the correct answer
// this could be polished and elaborated on in many ways - have fun with it!
// this could be nested inside a more complex quiz component that handles other kinds of questions
// TODO: emit a custom event when the user selects the right answer?
// to be handled by the theoretical parent component
// for example to unlock a prep block in a mastery path
class MultipleChoice extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.correctAnswer = parseInt(this.getAttribute("data-correct"), 10);
    this.radios = [];
    this.feedback = [];
  }

  connectedCallback() {
    this.render();
    this.initSlots();
    this.hideAllFeedback();
    this.addListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
            ::slotted([slot="feedback"]) {
                background: var(--theme-color--outline);
                padding: var(--theme-spacing--1) var(--theme-spacing--gutter);
                margin: calc(-1 * var(--theme-spacing--6)) var(--theme-spacing--gutter) var(--theme-spacing--4);
            }
            </style>
            <slot name="quiz"></slot>
            <slot name="feedback"></slot>
        `;
  }

  initSlots() {
    this.radios = this.shadowRoot
      .querySelector('slot[name="quiz"]')
      .assignedElements()[0]
      .querySelectorAll('[type="radio"]');
    this.feedback = this.shadowRoot
      .querySelector('slot[name="feedback"]')
      .assignedElements()[0]
      .querySelectorAll(".c-quiz__remark");
  }
  hideAllFeedback() {
    this.feedback.forEach((remark) => (remark.hidden = true));
  }
  addListeners() {
    this.radios.forEach((radio) =>
      radio.addEventListener("change", (event) =>
        this.updateFeedback(Number(event.target.value))
      )
    );
  }
  updateFeedback(selectedAnswer) {
    // rm classes from the slot
    this.feedback[0].closest("section").classList.remove("is-good");
    // unhide the feedback that matches the selected radio
    this.feedback.forEach((remark, index) => {
      remark.hidden = index !== selectedAnswer;
    });

    //if it's right, add a signal class
    if (selectedAnswer === this.correctAnswer) {
      this.feedback[0].closest("section").classList.add("is-good");
    }
  }
}

customElements.define("multiple-choice", MultipleChoice);
