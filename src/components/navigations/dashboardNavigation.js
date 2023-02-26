import { Link, Outlet } from "react-router-dom";
import "../../design/navigation_css/dashboardNavigation.css";

const DashboardPageNavigation = () => {
  return (
    <>
      <nav className="dashboardPageNavigation">
        <div>Image</div>
        <Link to="parkingSlot">Parking Slot</Link>
        <Link to="floor">Floors</Link>
        <Link to="vehicle">Vehicle</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default DashboardPageNavigation;
