import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Product from "./Component/Product.jsx";
import Detail from "./Component/Detail.jsx";

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/footer.scss";
import "./Styles/home.scss";

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
        <Footer />
    </Router>

    </>
  );
}

export default App;
