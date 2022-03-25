import React from 'react'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/ProductType'

type ProductsProps = {
    product:ProductType[];
}

const Products = (props: ProductsProps) => {
  return (
    <div>
        <ProductList  product= {props.product}/>
    </div>
  )
}

export default Products