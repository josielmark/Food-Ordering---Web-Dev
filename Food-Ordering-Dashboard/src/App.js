import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/MainProducts'
import Orders from './pages/Orders'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Customers from './pages/Customers'
import AddProducts from './pages/AddProducts'
import EditProduct from './pages/EditProducts'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/addproduct" element={<AddProducts />} />
                    <Route path='/editproduct/:id' element={<EditProduct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
