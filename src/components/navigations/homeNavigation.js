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
  return (
    <>
      {/* HomeNavigation Bar */}
      <nav>
        <div className="links">
          <div className="image-layer">
            <div id="logo-img"></div>
          </div>
          <Link id="nav-link" to="/home">
            Home
          </Link>
          <br />
          <Link id="nav-link" to="/">
            Login
          </Link>
        </div>
        <div>
          <Button onClick={registerWindow}>Sign Up</Button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeNavigation;
