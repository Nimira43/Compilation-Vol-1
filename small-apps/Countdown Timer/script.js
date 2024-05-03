const startEl = document.getElementById('start')
const stopEl = document.getElementById('stop')
const resetEl = document.getElementById('reset')
const timerEl = document.getElementById('timer')

let interval
let timeLeft = 3600

const updateTimer = () => {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    timerEl.innerHTML = formattedTime
}

const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--
        updateTimer()
        if (timeLeft === 0) {
            clearInterval(interval)
            alert('Time is over')
            timeLeft = 3600
            updateTimer()
        }
    }, 1000)
}

const stopTimer = () => clearInterval(interval)

const resetTimer = () => {
    clearInterval(interval)
    timeLeft = 3600
    updateTimer()
}

startEl.addEventListener('click', startTimer)
stopEl.addEventListener('click', stopTimer)
resetEl.addEventListener('click', resetTimer)