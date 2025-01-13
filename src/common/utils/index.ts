export const formatMoney = (price: number) => {
  return price.toLocaleString('es-PE', {
    style: "currency",
    currency: "PEN"
  })
}