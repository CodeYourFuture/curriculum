class TimeTotal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.showTotalTime();
  }

  getTotalMinutes = (timeElements) =>
    [...timeElements].reduce((sum, time) => {
      const minutes = parseInt(time.getAttribute("datetime").slice(1, -1));
      return sum + (isNaN(minutes) ? 0 : minutes);
    }, 0);

  formatTime = (totalMinutes) => ({
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
  });

  showTotalTime = () => {
    const timelineEntries = document.querySelectorAll(".c-block__time");
    const totalMinutes = this.getTotalMinutes(timelineEntries);
    const { hours, minutes } = this.formatTime(totalMinutes);
    // create a time element to show all this
    const timeElement = document.createElement("time");
    this.shadowRoot.appendChild(timeElement);

    // Set the total time and datetime attribute
    timeElement.textContent = `${hours}h ${minutes}m`;
    timeElement.setAttribute("datetime", `PT${hours}H${minutes}M`);
    timeElement.setAttribute("title", "Total time estimate");
  };
}

customElements.define("time-total", TimeTotal);
