import { Route, Routes } from "react-router-dom";
import ParkingSlotPage from "../dashboardPage/parkingSlot";
import CustomerCancelSlot from "./customerCancel";
import CustomerDashboard from "./customerDashboard";
import CustomerFloorPage from "./customerFloor";
import CustomerNavigation from "./customerNavigation";
import CustomerParkingSlotPage from "./customerSlots";
import CustomerTransaction from "./customerTransaction";
import CustomerVehiclePage from "./customerVehicle";
import CustomerProfile from "./customerProfile";

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
        <Route path="transaction" element={<CustomerTransaction />} />
        <Route path="bookedslot" element={<CustomerCancelSlot />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Routes>
    </>
  );
};

export default CustomerRoute;
