import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const ShowInfo = (props) => {
  return <div>Show {props.name}</div>
}

function App() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("green");
  const [myStatus, setStatus] = useState(false);
  const [product, setProducts] = useState([{ id: 1, name: "trọng" }, { id: 2, name: "Kiều" }])

  const removeItem = (id) => {
    const newProduct = product.filter(item => item.id !== id);

    setProducts(newProduct);
  }

  return <div>


    String:<div style={{ background: color, width: 100, height: 100 }}>Conten</div>
    <br />
    <button onClick={() => setColor(color + "red")}> Color</button>
    Boolean:{myStatus ? "Đã kết hôn" : "Chưa kết hôn"} <br />
    <hr />
    Number:{count} <br /> <button onClick={() => setCount(count + 1)}  >  Click  </button>

    <button onClick={() => setStatus(!myStatus)}> Status</button>
    <hr />
    {myStatus && <div>
      Arr:{product.map(item => <div>{item.name} <br />

      <button onClick={() => removeItem(item.id)}>Delete</button></div>)}
    </div>}

  </div>
}

export default App
