import confetti, {
  create,
} from "https://cdn.jsdelivr.net/npm/canvas-confetti@0.2.0-beta0/dist/confetti.module.mjs";

class ConfettiCheckboxes extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                .confetti {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                    pointer-events: none;
                }
            </style>
            <slot></slot>
            <canvas id="confetti" class="confetti"></canvas>
        `;

    this.confettiCanvas = this.shadowRoot.getElementById("confetti");
    this.checkboxes = this.querySelectorAll('input[type="checkbox"]');
    this.allChecked = false;

    this.addCheckboxListeners();
    this.initialiseCheckboxValues();
  }

  initialiseCheckboxValues() {
    this.checkboxes.forEach((checkbox, index) => {
      const savedValue = localStorage.getItem(`confetti-checks-${window.location.pathname}-${index}`)
      checkbox.checked = savedValue === 'true';
    });
  }

  addCheckboxListeners() {
    this.checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("change", () => {
        localStorage.setItem(`confetti-checks-${window.location.pathname}-${index}`, checkbox.checked)
        this.allChecked = Array.from(this.checkboxes).every(
          (checkbox) => checkbox.checked
        );
        if (this.allChecked) {
          this.triggerConfetti();
          this.updateAnnouncer("Well done! You've completed all the objectives!");
        } else {
          this.updateAnnouncer("");
        }
      });
    });
  }

  triggerConfetti() {
    confetti.create(this.confettiCanvas, {
      resize: true,
      useWorker: true,
    })({ particleCount: 200, spread: 170 });
  }

  updateAnnouncer(text) {
    this.querySelector("#announcer").textContent = text;
  }
}

customElements.define("confetti-checkboxes", ConfettiCheckboxes);
