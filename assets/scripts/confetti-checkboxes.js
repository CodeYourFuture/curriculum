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
  }

  addCheckboxListeners() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        this.allChecked = Array.from(this.checkboxes).every(
          (checkbox) => checkbox.checked
        );
        if (this.allChecked) {
          this.triggerConfetti();
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
}

customElements.define("confetti-checkboxes", ConfettiCheckboxes);
