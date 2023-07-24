import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { Footer, Navbar } from "./common";
import Cart from "./pages/Cart";
import CartPage from "./pages/CartPage";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function App() {
  return (
    <>
      <BrowserRouter basename="bb">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutPage />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
