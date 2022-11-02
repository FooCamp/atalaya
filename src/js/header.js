export function header() {
  const button = document.getElementById('burger-menu')
  const buttonClose = document.getElementById('close-button')
  var menuMobile = document.getElementById('menu-mobile')
  button.addEventListener('click', function () {
    menuMobile.style.visibility = 'visible'
    menuMobile.style.opacity = 1
  })
  buttonClose.addEventListener('click', function () {
    menuMobile.style.visibility = 'hidden'
    menuMobile.style.opacity = 0
  })
}
