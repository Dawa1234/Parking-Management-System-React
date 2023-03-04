import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";
import "../../design/navigation_css/dashboardNavigation.css";

const DashboardPageNavigation = () => {
  const showNavigationBar = () => {
    const navigationContent = document.getElementById("navigation-content");
    navigationContent.style.display = "flex";
  };
  // show nav Content
  const hideNavigationBar = () => {
    const navigationContent = document.getElementById("navigation-content");
    navigationContent.style.display = "none";
  };

  const logOut = () => {};
  return (
    <>
      <div id="navigation-content">
        <div onClick={hideNavigationBar} className="X">
          X
        </div>
        <div>
          <Link id="nav-link" to="parkingSlot">
            Parking Slot
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="floor">
            Floors
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="vehicle">
            Vehicle
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="">
            Dashboard
          </Link>
        </div>
      </div>
      {/* Navigation bar */}
      <nav className="dashboardPageNavigation">
        <div onClick={showNavigationBar} id="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="image-layer">
          <div id="logo-img"></div>
        </div>
        <div>
          <Link id="nav-link" to="parkingSlot">
            Parking Slot
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="floor">
            Floors
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="vehicle">
            Vehicle
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="">
            Dashboard
          </Link>
        </div>
        <div>
          <Button color="danger" id="logout">
            Log out
          </Button>
        </div>
      </nav>

      <Outlet context={{ data: "Data" }} />
    </>
  );
};

export default DashboardPageNavigation;
