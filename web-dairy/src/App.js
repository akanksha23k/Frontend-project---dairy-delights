import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Login from "./pages/Login";
import AdminOrders from "./pages/AdminOrders";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/order/:id" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/orders" element={<AdminOrders/>}/>
        <Route path="/products/:category" element={<Products />} />

      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
