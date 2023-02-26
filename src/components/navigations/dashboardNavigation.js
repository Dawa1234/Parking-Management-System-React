import { Link, Outlet } from "react-router-dom";
import "../../design/navigation_css/dashboardNavigation.css";

const DashboardPageNavigation = () => {
  return (
    <>
      <nav className="dashboardPageNavigation">
        <div className="image-layer">
          <div id="logo-img"></div>
        </div>
        <Link id="nav-link" to="parkingSlot">
          Parking Slot
        </Link>
        <Link id="nav-link" to="floor">
          Floors
        </Link>
        <Link id="nav-link" to="vehicle">
          Vehicle
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default DashboardPageNavigation;
