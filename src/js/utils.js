export const utils = {
  convertPesos: function (val) {
    return this.formatterCOP.format(val.textContent)
  },
  formatterCOP: new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }),
}

export function convertDate() {
  const dateP = document.getElementsByClassName('blog__fecha')
  const date = new Date(dateP[0].textContent)
  const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const dateFormated =
    meses[date.getMonth()] + ' ' + date.getDate() + ' - ' + date.getFullYear()
  dateP[0].textContent = dateFormated
}
