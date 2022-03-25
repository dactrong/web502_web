import { ProductType } from "../types/ProductType";
import instance from "./instance";

export const create = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product)
}
export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const read = (_id: number) => {
    const url = `/product/${_id}`
    return instance.get(url)
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product)
}