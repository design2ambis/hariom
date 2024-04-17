import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/index";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Wishlist from "./pages/wishlist";
import Product from "./pages/product";
import Account from "./pages/my-account";
import Error404 from "./pages/404"
import Contact from "./pages/contact";
import Register from "./pages/register";
import Shop from "./pages/shop";
import Orderdetails from "./pages/order-details";

var token = localStorage.getItem("token");


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register"  element={<Register isLoggedIn={token}/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/shop/:cat/:subcat/:page" element={<Shop/>} />
        <Route path="/product/:prono" element={<Product />} />
        <Route path="/order-details/:orderId" element={<Orderdetails />} />
        
        
        <Route path="*" element={<Error404 />} /> {/* Fallback route for 404 */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;