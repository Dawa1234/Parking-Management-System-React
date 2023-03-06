import { Link, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const CustomerNavigation = () => {
  const navigate = useNavigate();
  const showNavigationBar = () => {
    const navigationContent = document.getElementById("navigation-content");
    navigationContent.style.display = "flex";
  };
  // show nav Content
  const hideNavigationBar = () => {
    const navigationContent = document.getElementById("navigation-content");
    navigationContent.style.display = "none";
  };

  const logOut = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div id="navigation-content">
        <div onClick={hideNavigationBar} className="X">
          X
        </div>
        <div>
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="vehicle">
            Vehicle
          </Link>
        </div>
        <div>
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="floor">
            Floors
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="parkingSlot"
          >
            Parking Slot
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="transaction"
            replace
          >
            Transaction
          </Link>
        </div>
        <div>
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="">
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="bookedslot"
          >
            Booked Slot
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="transaction"
          >
            Profile
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
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="vehicle">
            Vehicle
          </Link>
        </div>
        <div>
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="floor">
            Floors
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="parkingSlot"
          >
            Parking Slot
          </Link>
        </div>
        <div>
          <Link onClick={() => hideNavigationBar()} id="nav-link" to="">
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="transaction"
          >
            Transactions
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="bookedslot"
          >
            Booked Slot
          </Link>
        </div>
        <div>
          <Link
            onClick={() => hideNavigationBar()}
            id="nav-link"
            to="transaction"
          >
            Profile
          </Link>
        </div>
        <div>
          <Button onClick={logOut} color="danger" id="logout">
            Log out
          </Button>
        </div>
      </nav>
    </>
  );
};

export default CustomerNavigation;
