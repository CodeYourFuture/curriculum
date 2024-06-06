class StopWatch {
    constructor() {
        this.attachListener();
    }

    attachListener() {
        const timeElements = document.querySelectorAll('.c-block__time');

        timeElements.forEach(timeElement => {
            timeElement.addEventListener('click', () => {
                if (!timeElement.classList.contains('timer-active')) {
                    this.startTimer(timeElement);
                }
            });
        });
    }

    startTimer(timeElement) {
        const datetime = timeElement.getAttribute('datetime');
        const duration = this.parseDuration(datetime); // Convert format PXM to milliseconds
        if (isNaN(duration) || duration <= 0) {
            console.error("Invalid duration specified in datetime attribute.");
            return;
        }
        let startTime = Date.now();

        timeElement.classList.add('timer-active');

        const timerInterval = setInterval(() => {
            const remainingTime = this.updateTime(timeElement, startTime, duration);

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                timeElement.classList.remove('timer-active');
            }
        }, 1000);
    }

    parseDuration(datetime) {
        const match = datetime.match(/P(\d+)M/);
        if (!match) {
            return NaN;
        }
        const minutes = parseInt(match[1]);
        return minutes * 60 * 1000; // Convert minutes to milliseconds
    }

    updateTime(element, startTime, duration) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const remainingTime = duration - elapsedTime;

        if (remainingTime <= 0) {
            element.textContent = "0 minutes 00 seconds ⏱";
            return 0;
        }

        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        element.textContent = `${minutes} minutes ${seconds < 10 ? '0' : ''}${seconds} seconds ⏱`;
        return remainingTime;
    }
}

new StopWatch();