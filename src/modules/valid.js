'use strict'

const valid = () => {

  const inputsText = document.querySelectorAll('input[type = text]')
  const inputsEmail = document.querySelectorAll('input[type = email]')
  const inputsTel = document.querySelectorAll('input[type = tel]')
  const textarea = document.getElementById('form2-message')


  inputsText.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
    })
  })

  textarea.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\sа-яА-Я-]+/i, "")
  })


  inputsEmail.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\w@_\-.!~*']+/, "")
    })
  })

  inputsTel.forEach((item) => {
    item.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d()-]+/, "")
    })
  })

 }

export default valid;