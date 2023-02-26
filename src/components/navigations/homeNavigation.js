import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";
import "../../design/navigation_css/homeNavigation.css";

const HomeNavigation = () => {
  const registerWindow = (e) => {
    e.preventDefault();
    // Regsiter form
    var registerForm = document.getElementById("register");
    // Show register form
    registerForm.style.display = "flex";
  };
  // show nav Content
  const showNavigationBar = () => {
    const navigationContent = document.getElementById(
      "navigation-content-home"
    );
    navigationContent.style.display = "flex";
  };
  // show nav Content
  const hideNavigationBar = () => {
    const navigationContent = document.getElementById(
      "navigation-content-home"
    );
    navigationContent.style.display = "none";
  };
  return (
    <>
      <div id="navigation-content-home">
        <div onClick={hideNavigationBar} className="X">
          X
        </div>
        <div>
          <Link id="nav-link" to="/home">
            Home
          </Link>
        </div>
        <div>
          <Link id="nav-link" to="/">
            Login
          </Link>
        </div>
      </div>
      {/* HomeNavigation Bar */}
      <nav>
        <div onClick={showNavigationBar} id="nav-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="links">
          <div className="image-layer">
            <div id="logo-img"></div>
          </div>
          <div>
            <Link id="nav-link" to="/home">
              Home
            </Link>
          </div>
          <br />
          <div>
            <Link id="nav-link" to="/">
              Login
            </Link>
          </div>
        </div>
        <div>
          <Button onClick={registerWindow} color="success">
            Sign Up
          </Button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeNavigation;
