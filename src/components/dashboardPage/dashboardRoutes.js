import { Route, Routes } from "react-router-dom";
import DashboardPageNavigation from "../navigations/dashboardNavigation";
import DashboardPage from "./dashboard";
import FloorPage from "./floor";
import ParkingSlotPage from "./parkingSlot";
import VehiclePage from "./vehicle";

const DashboardRoutes = () => {
  return (
    <>
      <DashboardPageNavigation />
      <Routes>
        <Route path="" element={<DashboardPage />} />
        <Route path="floor" element={<FloorPage />} />
        <Route path="floor/:category" element={<FloorPage />} />
        <Route path="parkingSlot" element={<ParkingSlotPage />} />
        <Route path="parkingSlot/:id" element={<ParkingSlotPage />} />
        <Route path="vehicle" element={<VehiclePage />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;
