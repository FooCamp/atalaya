import { BURGUER_MENU, MENU, CLOSE, OVERLAY } from './constants'

export const header = () => {
  const burgerMenu = document.getElementById(BURGUER_MENU)
  const overlay = document.getElementById(MENU)

  burgerMenu.addEventListener('click', function () {
    this.classList.toggle(CLOSE)
    overlay.classList.toggle(OVERLAY)
  })
}
