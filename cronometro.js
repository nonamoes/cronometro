clearInterval(stopwatchInterval);
stopwatch.textContent = '00:00';
}

const start = () => {
secondsSphere.style.animation = 'rotacion 60s linear infinite';
let startTime = Date.now() - runningTime;
secondsSphere.style.animationPlayState = 'running';
stopwatchInterval = setInterval( () => {
    runningTime = Date.now() - startTime;
    stopwatch.textContent = calculateTime(runningTime);
}, 1000)
}

const calculateTime = runningTime => {
const total_seconds = Math.floor(runningTime / 1000);
const total_minutes = Math.floor(total_seconds / 60);

const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
const display_minutes = total_minutes.toString().padStart(2, "0");

return `${display_minutes}:${display_seconds}`
}