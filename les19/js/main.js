
const timerDay = document.getElementById('timer-day')
let idInterval
const timerToday = document.getElementById("today")
const time = document.getElementById("time")
const gud = document.getElementById("gud")
console.log(gud)


const getTimeRemaining = () => {

  let dateStop = new Date('1 januar 2023').getTime();
  let dateNow = new Date().getTime();
  let timeRemaining = (dateStop - dateNow) / 1000  
  let day = Math.floor((timeRemaining / 60 / 60)/24)

  return {
    timeRemaining, 
    day
  }


}

const updateClock = () => {
  let getTime = getTimeRemaining()

  if (getTime.day < 10) {
    timerDay.textContent = '0' + getTime.day
  } else {
    timerDay.textContent = getTime.day+ 'Дней'
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
  function gudDay() {
    
    if (hourNum >= 4 && hourNum < 11) return 'Доброе утро!'
    else if (hourNum >= 11 && hourNum < 17) return 'Добрый день!'
    else if (hourNum >= 17 && hourNum < 24)
      return 'Добрый вечер!'
    else return 'Доброй ночи!'

  }

  let minuteNum = check(minute)
  let hourNum = check(hour)
  let secondsNum = check(seconds)
  let weekDayVariable = (dateBase[0].toUpperCase() + dateBase.slice(1)).split(',')[0]
 

  
  timerToday.textContent = ` Сегодня ${weekDayVariable} `
  console.log(weekDayVariable)

  time.textContent = ` Текущее время:  ${hourNum} : ${minuteNum} : ${secondsNum} `
  

  gud.textContent=`${gudDay()}`
  console.log(gud.textContent) 


}

dataTime()
setInterval(dataTime, 1000)

