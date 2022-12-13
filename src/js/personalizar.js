const form = document.querySelector('form')

export const personalizar = () => {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    const data = [...formData.entries()]
    const dataAsString = data
      .map(
        (campo) =>
          `${encodeURIComponent(campo[0])}+${encodeURIComponent(campo[1])}`
      )
      .join('%0a')
    const mensaje =
      'Hola+buenos+dias+me+gustaría+adquirir+un+kit+con+las+siguientes+caracteristicas:%0a'
    const url = `https://api.whatsapp.com/send/?phone=573216114554&type=phone_number&text=${mensaje}${dataAsString}`

    window.open(url, '_blank').focus()
  }

  if (form && form.length > 0) {
    form.addEventListener('submit', handleSubmit)
  }
}
