import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../types/ProductType';

type Props = {}

const ProductDetail = (props: Props) => {
    const {id} = useParams();
    const [product, setProduct] = useState<ProductType[]> ([])

    useEffect (() =>{
    const getProduct = async () =>{
        const {data} = await read(id);
        setProduct(data)
    }
    getProduct();
    },[])
  return (
    <div>
        <h2>{product?.name}</h2>
        <h3>{product?.price}</h3>
      
    </div>
  )
}

export default ProductDetail