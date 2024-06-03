class StopWatch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.stopWatchButton = null;
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
    }

    connectedCallback() {
        this.render();
        this.attachListener();
    }

    attachListener() {
        this.stopWatchButton = this.shadowRoot.querySelector(".stopwatch");
        if (this.stopWatchButton instanceof Element) {
            this.stopWatchButton.addEventListener("click", this.toggleStopwatch);
        }
    }

    toggleStopwatch() {
        this.stopWatchButton.classList.toggle("stopwatch-active");
        // TODO START TIMER
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .stopwatch {
                    font-size: 1.6rem;
                    cursor: pointer;
                }
                .stopwatch:hover, .stopwatch-active {
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