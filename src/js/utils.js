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
