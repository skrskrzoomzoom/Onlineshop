import "./Css/App.css";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/footer/Footer";
import Aboutme from "./Components/about/About";
import Product from "./Components/product/Product";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/services" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
