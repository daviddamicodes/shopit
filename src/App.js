import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router";
import ProductList from "./pages/ProductList";
import Announcement from "./components/Announcement";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Navbar /> */}
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    <>
      <Announcement />
      <Navbar />
      {/* <ProductList /> */}
      <Product />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
