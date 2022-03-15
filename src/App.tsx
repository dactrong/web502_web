import { useState } from 'react'
import logo from './logo.svg'
import  ShowInfo from './component/ShowInfo'
import './App.css'
import { Product } from './type/product'

function App() {
  const [count, setCount] = useState<number>(0)
  const [color , setColor] = useState("red")
  const [status , setStatus] = useState(false)
  const [products , setProduct] = useState([{id:1 , name:"Trong"}, {id:2 , name:"Kiều"}])
  const [info, setInfo] = useState<Product>({
    name:"trong",
    age:21
  })
 
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count+1)}>button</button>
      <div style={{background: color}}>Content</div>
      {color} <button onClick ={() => setColor("blue")}>color</button>
      <div> {status ? "Đã kết hôn" : "Chưa kết hôn"}</div>
      <button onClick={() => setStatus(!status)}> Status</button>
      
      <ShowInfo person={info}/>
    </div>
      
    
      

  )
}

export default App
