import { Route, Routes } from "react-router-dom";
import CustomerDashboard from "./customerDashboard";
import CustomerFloorPage from "./customerFloor";
import CustomerNavigation from "./customerNavigation";
import CustomerVehiclePage from "./customerVehicle";

const CustomerRoute = () => {
  return (
    <>
      <CustomerNavigation />
      <Routes>
        <Route path="" element={<CustomerDashboard />} />
        <Route path="vehicle" element={<CustomerVehiclePage />} />
        <Route path="floor" element={<CustomerFloorPage />} />
        <Route path="floor/:category" element={<CustomerFloorPage />} />
      </Routes>
    </>
  );
};

export default CustomerRoute;
