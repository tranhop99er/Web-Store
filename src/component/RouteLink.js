import { Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Product from "./Products/Product";
import Products from "./Products/Products";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Cart from "./Cart/Cart";
import Checkout from "./Cart/Checkout";

const RouteLink = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default RouteLink;
