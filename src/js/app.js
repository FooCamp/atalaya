// TODO check this import, without it the hot reload does not work
import '../scss/main.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import header.js
import { header } from './header'
// Iport utils
import { utils } from './utils'
import { convertDate } from './utils'
// Import galeriaProducto.js
import { galeria } from './galeriaProducto'
// import handler form
import { personalizar } from './personalizar'

// execute components on page load

window.addEventListener('load', () => {
  header()
  galeria()
  personalizar()
  convertDate()

  const precios = document.getElementsByClassName('precio-producto__precio')
  if (precios.length > 0) {
    for (var i = 0; i < precios.length; i++) {
      precios[i].textContent = utils.convertPesos(precios[i])
    }
  }
})
