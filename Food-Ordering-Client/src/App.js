import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllFoods from "./pages/AllFoods";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Carts from "./components/UI/cart/Carts";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound"
import Dashboard from "./components/admin/Dashboard"
import MyOrders from "./pages/MyOrders";
import AboutUs from "./pages/AboutUs";
function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    
    <div>
    {showCart && <Carts />}
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<AllFoods />} />
       <Route path="/products/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/aboutus" element={<AboutUs />} />
      
       <Route path="/dashboard" element={<Dashboard />} /> 

      {/* ERROR */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>

    </div>
  )
}

export default App;
