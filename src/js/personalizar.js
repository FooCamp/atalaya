const form = document.querySelector('form')
const datosPersona = document.querySelector('.labelDatosPersona')
const datosRegalo = document.querySelector('.datos')

const inputRegalo = document.querySelector('.checkboxRegalo')

// oculta o muestra los campos del formulario en caso de ser regalo
inputRegalo.addEventListener('change', () => {
  if (inputRegalo.value) {
    datosPersona.classList.toggle('not-visible')
    datosRegalo.classList.toggle('not-visible')
  } else {
    datosPersona.classList.toggle('visible')
    datosRegalo.classList.toggle('visible')
  }
})

export const personalizar = () => {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    const data = [...formData.entries()]
    // const mensajeCanalizado = formData.getAll('checkboxMensajeCanalizado');
    // const regalo = formData.getAll('checkboxRegalo');

    const dataAsString = data
      .map((campo) => {
        return `${encodeURIComponent(campo[0])}:+${encodeURIComponent(
          campo[1]
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
