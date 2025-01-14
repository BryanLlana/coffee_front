export interface IProduct {
  id: number,
  name: string,
  image: string,
  price: number,
  categoryId: number
}

export interface IProductCart {
  id: number,
  name: string,
  price: number,
  quantity: number
}