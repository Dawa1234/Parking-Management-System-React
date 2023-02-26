import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/authentication/registerpage";
import { Link, Route, Routes } from "react-router-dom";
import LoginContent from "./components/authentication/loginContent";
import Home from "./components/home";
import HomeNavigation from "./components/navigations/homeNavigation";
import BottomInformation from "./components/bottom_info/bottm_information";
import NotFoundPage from "./components/notFoundPage";
import DashboardPage from "./components/dashboardPage/dashboard";
import DashboardPageNavigation from "./components/navigations/dashboardNavigation";
import ParkingSlotPage from "./components/dashboardPage/parkingSlot";
import FloorPage from "./components/dashboardPage/floor";
import VehiclePage from "./components/dashboardPage/vehicle";
import OurPolicies from "./components/ourPolices";

function App() {
  // Register window
  const registerWindow = (e) => {
    e.preventDefault();
    // Regsiter form
    var registerForm = document.getElementById("register");
    // Show register form
    registerForm.style.display = "flex";
  };
  return (
    <>
      {/* Register Page */}
      <Register />

      {/* Content */}
      <Routes>
        {/* Home Page Navigation */}
        <Route path="/" element={<HomeNavigation />}>
          <Route index element={<LoginContent />} />
          <Route path="/home" element={<Home />} />
        </Route>
        {/* Dashboard Page Navigation */}
        <Route path="/dashboard" element={<DashboardPageNavigation />}>
          <Route index element={<DashboardPage />} />
          <Route path="parkingSlot" element={<ParkingSlotPage />} />
          <Route path="floor" element={<FloorPage />} />
          <Route path="vehicle" element={<VehiclePage />} />
        </Route>
        <Route path="/ourPolicies" element={<OurPolicies />} />
        {/* If not route is found*/}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* Bottom Information */}
      <BottomInformation />
    </>
  );
}

export default App;
