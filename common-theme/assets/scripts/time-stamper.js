class TimeStamper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;

    this.timelineEntries = this.querySelectorAll(
      ".c-block:not(.is-nested .c-block)",
    );
    this.startTime = this.getAttribute("start-time");
  }

  connectedCallback() {
    this.stampTime();
  }

  formatTime(date) {
    const hours = date.getHours();
    const mins = date.getMinutes();
    const formatted = `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;

    return formatted;
  }

  stampTime() {
    let currentTime = new Date(`1970-01-01T${this.startTime}`); // Set initial time to 10:00 AM

    const blockTimes = [];

    this.timelineEntries.forEach((entry) => {
      const timeElement = entry.querySelector(".c-block__time");
      const blockTitle = entry.querySelector(".c-block__title");
      const blockId = blockTitle?.id;
      if (!timeElement) return;
      const minutes = parseInt(
        timeElement.getAttribute("datetime").slice(1, -1),
      );

      // Format the timestamp
      const timeStamp = this.formatTime(currentTime);

      // Set the timestamp as content of the time element
      timeElement.textContent = `⏰ ${timeStamp}`;

      // Increment the currentTime by the given minutes
      currentTime.setMinutes(currentTime.getMinutes() + minutes);

      if (blockId) {
        blockTimes.push({
          id: blockId,
          start: timeStamp,
          end: this.formatTime(currentTime),
        });
      }
    });
  }
}

customElements.define("time-stamper", TimeStamper);
