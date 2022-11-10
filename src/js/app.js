// TODO check this import, without it the hot reload does not work
import '../scss/main.scss'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Import header.js
import { header } from './header'
// Import galeriaProducto.js
import { galeria } from './galeriaProducto'
header()
galeria()
