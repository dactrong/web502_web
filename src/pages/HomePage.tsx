import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/ProductType'

type HomePageProps = {
    product: ProductType[];
}

const Homepage = (props: HomePageProps) => {
  return (
    <div>
          <Banner/>
          <ProductList product = {props.product}/>

    </div>
  )
}

export default Homepage