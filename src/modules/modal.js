const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')
  const popupContent = modal.querySelector('.popup-content')
  let count = 0
  let idInterval

  const flayAnimate = () => {
    count++
    idInterval = requestAnimationFrame(flayAnimate)
    popupContent.style.top = '-90%'

    if (count < 15) {
      popupContent.style.top = count + '%'

    } else {
      cancelAnimationFrame(idInterval)
      popupContent.style.top = '15%'
    }
  }


  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
      if (window.screen.width > 768) {
        flayAnimate()
      }

    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    count = 0

  })
  


}

export default modal