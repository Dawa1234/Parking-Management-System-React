import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardPageNavigation from "../navigations/dashboardNavigation";
import Transaction from "../transaction";
import DashboardPage from "./dashboard";
import FloorPage from "./floor";
import ParkingSlotPage from "./parkingSlot";
import VehiclePage from "./vehicle";

const DashboardRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    var admin = JSON.parse(window.localStorage.getItem("admin"));
    if (admin === null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <DashboardPageNavigation />
      <Routes>
        <Route path="" element={<DashboardPage />} />
        <Route path="floor" element={<FloorPage />} />
        <Route path="floor/:category" element={<FloorPage />} />
        <Route path="parkingSlot" element={<ParkingSlotPage />} />
        <Route path="parkingSlot/:id/:category" element={<ParkingSlotPage />} />
        <Route path="vehicle" element={<VehiclePage />} />
        <Route path="transaction" element={<Transaction />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
