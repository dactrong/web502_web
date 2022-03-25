import React from 'react'
import { ProductType } from '../types/ProductType'

type ProductListProps = {
    product:ProductType[]
}

const ProductList = ({product}: ProductListProps) => {
    return (
        
        <div>
            <h2>Product</h2>
            <div className="row">
                {product?.map((product, index) =>{
                    return(
                        <div className="col-3" key={index}>
                        <div className="card" >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <a href={`/product/${product._id}`} className="btn btn-primary">Chi tiet</a>
                            </div>
                        </div>
                        
                    </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ProductList