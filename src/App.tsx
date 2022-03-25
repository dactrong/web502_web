import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { ProductType } from './types/ProductType';
import { create, list, remove, update } from './api/product';
import ProductDetail from './pages/ProductDetail';
import Homepage from './pages/HomePage';
import Products from './pages/Products';
import AdminLayout from './pages/layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProducts(data)
    }
    getProduct()

  }, []);
  const onHendleRemove = (_id: number) => {
    remove(_id);
    setProducts(products.filter(item => item._id !== _id));
  }

  const onHandleAdd = async (product: any) => {
    const { data } = await create(product);
    setProducts([...products, data]);
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product)
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {

    }
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
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
// onAdd={onHandleAdd}