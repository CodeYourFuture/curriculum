class TimeStamper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                /* You can include any component-specific styles here */
            </style>
            <slot></slot>
        `;

    this.timelineEntries = this.querySelectorAll(".c-block");
  }

  connectedCallback() {
    this.stampTime();
  }

  stampTime() {
    let currentTime = new Date("1970-01-01T10:00:00"); // Set initial time to 10:00 AM

    this.timelineEntries.forEach((entry) => {
      const timeElement = entry.querySelector(".c-block__time");
      if (!timeElement) return;
      const minutes = parseInt(
        timeElement.getAttribute("datetime").slice(1, -1)
      );

      // Format the timestamp
      const hours = currentTime.getHours();
      const mins = currentTime.getMinutes();
      const timeStamp = `${hours.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}`;

      // Set the timestamp as content of the time element
      timeElement.textContent = `⏰ ${timeStamp}`;

      // Increment the currentTime by the given minutes
      currentTime.setMinutes(currentTime.getMinutes() + minutes);
    });
  }
}

customElements.define("time-stamper", TimeStamper);
