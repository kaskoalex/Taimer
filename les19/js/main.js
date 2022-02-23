const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const timerDay = document.getElementById('timer-day')
let idInterval
const timerToday = document.getElementById("today")
console.log(timerHours)

const getTimeRemaining = () => {

  let dateStop = new Date('1 januar 2023').getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = (dateStop - dateNow) / 1000
  let hours = Math.floor((timeRemaining / 60 / 60) % 24)
  let minutes = Math.floor((timeRemaining / 60) % 60)
  let seconds = Math.floor(timeRemaining % 60)
  let day = Math.floor((timeRemaining / 60 / 60)/24)

  return {
    timeRemaining,
    hours,
    minutes,
    seconds,
    day
  }


}


const updateClock = () => {
  let getTime = getTimeRemaining()

  if (getTime.day < 10) {
    timerDay.textContent = '0' + getTime.day
  } else {
    timerDay.textContent = getTime.day
  }


  if (getTime.hours < 10) {
    timerHours.textContent = '0' + getTime.hours
  } else {
    timerHours.textContent = getTime.hours
  }
  if (getTime.minutes < 10) {
    timerMinutes.textContent = '0' + getTime.minutes
  } else {
    timerMinutes.textContent = getTime.minutes
  }
  if (getTime.seconds < 10) {
    timerSeconds.textContent = '0' + getTime.seconds
  } else {
    timerSeconds.textContent = getTime.seconds
  }


}

const workClock = () => {
  let getTime = getTimeRemaining()
  if (getTime.timeRemaining > 0) {
    idInterval = setInterval(updateClock, 1000)
  } else {
    clearInterval(idInterval)
    timerHours.textContent = '00'
    timerMinutes.textContent = '00'
    timerSeconds.textContent = '00'
  }
}

workClock()

const dataTime = function () {

  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()



  let dateNumber = new Date().toLocaleString('ru', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',

  });

  let dateBase = new Date().toLocaleString('ru', {
    weekday: 'long',
    year: 'numeric',
    day: 'numeric',
    month: 'long',

  })  

  const check = function (time) {
    if (time.toString().length < 2) {
      return time = '0' + time
    } else return time

  }

  let minuteNum = check(minute)
  let hourNum = check(hour)
  let secondsNum = check(seconds)
  let weekDayVariable = (dateBase[0].toUpperCase() + dateBase.slice(1)).split(',')[0]
 

  
  timerToday.textContent = ` Сегодня ${weekDayVariable} - ${hourNum} : ${minuteNum} : ${secondsNum} `
  console.log(weekDayVariable)


}

dataTime()
setInterval(dataTime, 1000)

