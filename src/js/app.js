// TODO check this import, without it the hot reload does not work
import '../scss/main.scss'

// Import header.js
import { header } from './header'
import { utils } from './utils'
header()

if (document.getElementsByClassName('precio-producto__precio')) {
  var precios = document.getElementsByClassName('precio-producto__precio')
  for (var i = 0; i < precios.length; i++) {
    precios[i].textContent = utils.convertPesos(precios[i])
  }
}
