import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import ShowInfo from './component/ShowInfo'
import './App.css'
import { Product } from './type/product'
import HomePage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import AdminLayout from './pages/layout/AdminLayout';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductManager'
import WebsiteLayout from './pages/layout/WebsiteLayout'

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

      <header>
      <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
      </header>
      <main>
       <Routes>
            <Route path="/" element={<WebsiteLayout />}>
                   <Route index element = {<HomePage />}/>
                   <Route path="product" element={<ProductPage />}/>
            </Route>
            <Route path="admin" element={<AdminLayout />}>
                     {/* <Route index element={<Navigate to="/admin/dashboard" />} /> */}
                     <Route path="dashboard" element={<Dashboard />} />
                     <Route path="product" element={<ProductManager />} />
            </Route>
            <Route path="about" element={<h1>About page</h1>}/>
       </Routes>
      </main>
    </div>




  )
}

export default App
