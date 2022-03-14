import { useState } from 'react'
import logo from './logo.svg'
import  ShowInfo from './component/ShowInfo'
import './App.css'
import { Product } from './type/product'

function App() {
  const [count, setCount] = useState<number>(0)
  const [info, setInfo] = useState<Product>({
    name:"trong",
    age:21
  })
 
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count+1)}>button</button>
      <ShowInfo person={info}/>
    </div>

  )
}

export default App
