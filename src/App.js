import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/authentication/registerpage";
import { Link, Route, Routes } from "react-router-dom";
import LoginContent from "./components/authentication/loginContent";
import Home from "./components/home";
import BottomInformation from "./components/bottom_info/bottm_information";
import NotFoundPage from "./components/notFoundPage";

function App() {
  return (
    <>
      {/* Register Page */}
      <Register />
      {/* Navigation Bar */}
      <nav>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/">Login</Link>
      </nav>
      {/* Content */}
      <Routes>
        <Route path="/" element={<LoginContent />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Bottom Information */}
      <BottomInformation />
    </>
  );
}

export default App;
