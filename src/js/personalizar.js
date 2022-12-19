const form = document.querySelector('form')
const datosPersona = document.querySelector('.labelDatosPersona')
const datosRegalo = document.querySelector('.datos')

const inputRegalo = document.querySelector('.checkboxRegalo')
const inputMensajecanalizado = document.querySelector('.mensajeCanalizadoRadio')

const convertirPrecioANumero = (precio) => {
  if (typeof precio === 'string') {
    const valorSinCurrency = precio.replace('$ ', '')
    const numeroPrecio = valorSinCurrency.replace('.', '')
    return Number(numeroPrecio)
  } else {
    return 40000
  }
}

const recuperarPrecio = () => {
  const precioGaleria = document.querySelector('.precio-producto__precio')
  if (precioGaleria) {
    return convertirPrecioANumero(precioGaleria.innerText)
  }
}

const actualizarPrecio = () => {
  const precio = recuperarPrecio()
  const total = document.querySelector('.precio__Total')
  if (total) {
    return (total.innerText = precio)
  } else {
    return
  }
}

const reemplazarGuiones = (texto) => {
  return texto.replace('--', '')
}

// oculta o muestra los campos del formulario en caso de ser regalo
if (inputRegalo) {
  inputRegalo.addEventListener('change', () => {
    const check = document.getElementById('regalo')
    if (check.checked) {
      datosPersona.classList.add('visible')
      datosRegalo.classList.add('visible')
      datosPersona.classList.remove('not-visible')
      datosRegalo.classList.remove('not-visible')
      // hace los campos requeridos si son visibles
      document.querySelector('.datos__Nombre').setAttribute('required', true)
      document.querySelector('.datos__Fecha').setAttribute('required', true)
      document.querySelector('.datos__Cel').setAttribute('required', true)
    } else {
      datosPersona.classList.add('not-visible')
      datosRegalo.classList.add('not-visible')
      datosPersona.classList.remove('visible')
      datosRegalo.classList.remove('visible')
      document.querySelector('.datos__Nombre').removeAttribute('required')
      document.querySelector('.datos__Fecha').removeAttribute('required')
      document.querySelector('.datos__Cel').removeAttribute('required')
    }
  })
}

// agrega el valor del mensaje canalizado al envío
if (inputMensajecanalizado) {
  inputMensajecanalizado.addEventListener('change', () => {
    const check = document.getElementById('canalizado')
    const total = document.querySelector('.precio__Total')
    const precio = recuperarPrecio()

    const precioInicial = convertirPrecioANumero(precio)

    if (check.checked) {
      const precioActualizado = Number(precioInicial) + 10000
      return (total.innerText = Number(precioActualizado))
    } else {
      return (total.innerText = Number(precioInicial))
    }
  })
}

export const personalizar = () => {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    const data = [...formData.entries()]

    const dataAsString = data
      .map((campo) => {
        return `* ${encodeURIComponent(campo[0])}:+${encodeURIComponent(
          reemplazarGuiones(campo[1])
        )}`
      })
      .join('%0a')
    const mensaje =
      'Hola+buenos+dias%0aMe+gustaría+adquirir+un+kit+con+las+siguientes+caracteristicas:%0a'
    const url = `https://api.whatsapp.com/send/?phone=573216114554&type=phone_number&text=${mensaje}${dataAsString}`

    window.open(url, '_blank').focus()
  }

  if (form && form.length > 0) {
    form.addEventListener('submit', handleSubmit)
  }
}

actualizarPrecio()
