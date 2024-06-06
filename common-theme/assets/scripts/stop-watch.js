class StopWatch {
    constructor() {
        if (StopWatch.instance) {
            return StopWatch.instance;
        }
        this.attachListener();
        StopWatch.instance = this;
    }

    attachListener() {
        const timeElements = document.querySelectorAll('.c-block__time');

        timeElements.forEach(timeElement => {
            timeElement.addEventListener('click', () => {
                if (!timeElement.classList.contains('is-active')) {
                    this.startTimer(timeElement);
                }
            });
        });
    }

    startTimer(timeElement) {
        const datetime = timeElement.getAttribute('datetime');
        const duration = this.parseDuration(datetime);

        if (!this.isValidDuration(duration)) {
            console.error("Invalid duration specified in datetime attribute.");
            return;
        }

        let startTime = Date.now();
        timeElement.classList.add('is-active');

        const timerInterval = setInterval(() => {
            const remainingTime = this.updateTime(timeElement, startTime, duration);

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                timeElement.classList.remove('is-active');
                timeElement.setAttribute('aria-live', 'assertive');
                this.playAlarm(2, 200, 200);
            }
        }, 1000);
    }

    playAlarm(repetitions, delayBetweenRepetitions, delayBetweenSounds) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        const playSound = async () => {
            const oscillator = audioCtx.createOscillator();
            oscillator.type = 'ine';
            oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
            oscillator.connect(audioCtx.destination);
            oscillator.start();

            await new Promise(resolve => setTimeout(resolve, delayBetweenSounds));
            oscillator.stop();
        };

        const playNextRepetition = async (repetitionIndex) => {
            if (repetitionIndex <= repetitions) {
                await playSound();
                await new Promise(resolve => setTimeout(resolve, delayBetweenRepetitions));
                await playNextRepetition(repetitionIndex + 1);
            } else {
                audioCtx.close();
            }
        };

        playNextRepetition(0);
    }

    parseDuration(datetime) {
        const match = datetime.match(/P(\d+)M/);
        if (!match) {
            return NaN;
        }
        const minutes = parseInt(match[1]);
        return minutes * 60 * 1000; // Convert minutes to milliseconds
    }

    isValidDuration(duration) {
        return!isNaN(duration) && duration > 0;
    }

    updateTime(element, startTime, duration) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const remainingTime = duration - elapsedTime;

        if (remainingTime <= 0) {
            element.textContent = "Countdown finished!";
            return 0;
        }

        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        element.textContent = `${minutes} minutes ${seconds < 10? '0' : ''}${seconds} seconds ⏱`;
        return remainingTime;
    }
}

const stopwatchInstance = new StopWatch();
export default stopwatchInstance;