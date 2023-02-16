import "./App.css";
import Login from "./Auth/login/Login";
import ForgotPassword from "./Auth/forgotPassword/ForgotPassword";
import Signup from "./Auth/signup/Signup";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
