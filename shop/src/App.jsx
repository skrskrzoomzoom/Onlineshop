import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Aboutme from "./Components/About";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trial from "./Components/trial";

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
