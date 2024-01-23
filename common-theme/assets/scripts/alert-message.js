class AlertMessage {
  constructor() {
    const alertEl = document.querySelector(".c-alert");
    if (alertEl instanceof Element === false) return;

    this.alertEl = alertEl;

    this.attachCloseListener();
    this.show();
  }

  attachCloseListener() {
    const alertClose = this.alertEl.querySelector(".close");

    alertClose.addEventListener("click", (event) => {
      this.alertEl.setAttribute("hidden", true);
    });
  }

  getUrlAlertParameters() {
    // Extract message and error parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    const error = urlParams.get("error");

    const alertParameters = { message: message, error: error };

    return alertParameters;
  }

  show() {
    const urlParams = this.getUrlAlertParameters();

    // Display a message if 'message' parameter is present
    if (urlParams.message) {
      this.alertEl.removeAttribute("hidden");
      this.alertEl.classList.remove("c-alert--warning");
      this.alertEl.classList.add("c-alert--info");
      this.alertEl.querySelector(".alert__message").innerHTML =
        urlParams.message;
    }

    // Display an error if 'error' parameter is present
    if (urlParams.error) {
      this.alertEl.removeAttribute("hidden");
      this.alertEl.classList.remove("c-alert--info");
      this.alertEl.classList.add("c-alert--warning");
      this.alertEl.querySelector(".alert__message").innerHTML = urlParams.error;
    }
  }
}

new AlertMessage();
