import React from 'react'
import { ProductType } from '../types/ProductType'

type ProductManagerProps = {
    product:ProductType[]
    onRemove:(_id:number) => void
}

const ProductManager = ({product, onRemove}: ProductManagerProps) => {
  return (
      <>
    <h2>Quản lý sản phẩm</h2>
    <table className="table table-bodered">
        
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá sản phẩm</th>
                <th>Button</th>
            </tr>

        </thead>
        <tbody>
            {product?.map ((product, index) => {
                return(
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button onClick={() => onRemove(product._id)}>Remove</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default ProductManager