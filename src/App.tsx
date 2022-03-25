import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { ProductType } from './types/ProductType';
import { create, list, remove } from './api/product';
import ProductDetail from './pages/ProductDetail';
import Homepage from './pages/HomePage';
import Products from './pages/Products';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductAdd from './pages/ProductAdd';


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProduct] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProduct(data)
    }
    getProduct()

  }, []);
  const onHendleRemove = (_id: number) => {
    remove(_id);
    setProduct(products.filter(item => item._id !== _id));
  }

  const onHandleAdd = async (product: any) => {
    const {data} = await create(product);
    setProduct([...products, data]);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage product={products} />} />
          <Route path="product"  >
            <Route index element={<Products product={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />  
          </Route>
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" >
            <Route index element={<ProductManager product={products} onRemove={onHendleRemove} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
// onAdd={onHandleAdd}