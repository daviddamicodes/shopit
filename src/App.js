import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import ProductList from "./pages/ProductList";
import Announcement from "./components/Announcement";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
