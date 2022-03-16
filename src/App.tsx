import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import ShowInfo from './component/ShowInfo'
import './App.css'
import { Product } from './type/product'

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name: "trong",
    age: 21
  })

  const [product, setProduct] = useState<Product[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get('http://localhost:3001/api/products');
      setProduct(data);
    }
    getProduct();
  },[])
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>button</button>


      <ShowInfo person={info} />
      {product.map(item => <div>{item.name}</div>)}
    </div>




  )
}

export default App
