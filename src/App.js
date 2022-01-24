import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Announcement from "./components/Announcement";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <Signin />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
