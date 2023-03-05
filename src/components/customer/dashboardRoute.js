import { Route, Routes } from "react-router-dom";
import ParkingSlotPage from "../dashboardPage/parkingSlot";
import CustomerDashboard from "./customerDashboard";
import CustomerFloorPage from "./customerFloor";
import CustomerNavigation from "./customerNavigation";
import CustomerParkingSlotPage from "./customerSlots";
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
        <Route path="parkingSlot" element={<CustomerParkingSlotPage />} />
        <Route
          path="parkingSlot/:id/:category"
          element={<CustomerParkingSlotPage />}
        />
      </Routes>
    </>
  );
};

export default CustomerRoute;
