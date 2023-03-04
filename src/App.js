import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/authentication/registerpage";
import { Route, Routes } from "react-router-dom";
import LoginContent from "./components/authentication/loginContent";
import Home from "./components/home";
import HomeNavigation from "./components/navigations/homeNavigation";
import BottomInformation from "./components/bottom_info/bottm_information";
import NotFoundPage from "./components/notFoundPage";
import OurPolicies from "./components/ourPolices";
import DashboardRoutes from "./components/dashboardPage/dashboardRoutes";

function App() {
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
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        {/* Our policeis */}
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
