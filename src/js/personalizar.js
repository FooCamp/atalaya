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

    const url = `https://api.whatsapp.com/send/?phone=phone&type=phone_number&text=${dataAsString}`
    return url
  }

  if (form && form.length > 0) {
    form.addEventListener('submit', handleSubmit)
  }
}
