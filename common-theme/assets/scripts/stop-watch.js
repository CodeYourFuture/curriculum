class StopWatch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.stopWatchButton = null;
        this.interval = null;
        this.endTime = null;
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
    }

    connectedCallback() {
        this.render();
        this.attachListeners();
    }

    attachListeners() {
        this.stopWatchButton = this.shadowRoot.querySelector(".stopwatch");
        if (this.stopWatchButton instanceof Element) {
            this.stopWatchButton.addEventListener("click", this.toggleStopwatch);
            this.attachListenerToStopwatch();
        }
    }

    resetStopWatch() {
        clearInterval(this.interval);
        this.interval = null;
        this.removeTimerElement();
        this.stopWatchButton.classList.remove("stopwatch-active");
    }

    attachListenerToStopwatch() {
        let initialURL = window.location.href;

        const popstateHandler = () => {
            if (window.location.href !== initialURL) {
                this.resetStopWatch();
                window.removeEventListener("popstate", popstateHandler);
                this.attachListenerToStopwatch();
            }
        };

        window.addEventListener("popstate", popstateHandler);
    }

    toggleStopwatch() {
        this.stopWatchButton.classList.toggle("stopwatch-active");

        if (this.interval) {
            this.resetStopWatch();
        } else {
            this.createTimerElement();
            const countdownMinutes = document.querySelector('.c-block__time').getAttribute("datetime").slice(1, -1);
            const now = new Date();
            this.endTime = new Date(now.getTime() + countdownMinutes * 60000);
            this.interval = setInterval(this.updateTimer, 1000);
        }
    }

    createTimerElement() {
        const isTimer = document.getElementById("stopwatch-countdown");

        if (!isTimer) {
            const timerElement = document.createElement("div");
            timerElement.id = "stopwatch-countdown";
            timerElement.innerHTML = `
                <p id="timer">
                    <span id="minutes"></span>
                    <span class="timer-unit">Minutes</span>
                    <span id="seconds"></span>
                    <span class="timer-unit">Seconds</span>
                </p>
            `;
            document.querySelector("[slot='header']").appendChild(timerElement);
        }
    }

    removeTimerElement() {
        const isTimer = document.getElementById("stopwatch-countdown");
        if (isTimer) {
            isTimer.remove();
        }
    }

    updateTimer() {
        const now = new Date().getTime();
        const distance = this.endTime - now;

        if (distance < 0) {
            clearInterval(this.interval);
            document.getElementById("stopwatch-countdown").innerHTML = "Countdown Finished";
            return;
        }

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
               .stopwatch {
                    font-size: 1.6rem;
                    cursor: pointer;
                }
               .stopwatch:hover,.stopwatch-active {
                    color: var(--theme-color--pop);
                }
            </style>
            <span class="stopwatch">
                <slot>⏱</slot>
            </span>
        `;
    }
}

customElements.define("stop-watch", StopWatch);