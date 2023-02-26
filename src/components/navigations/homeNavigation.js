import { Link, Outlet } from "react-router-dom";
import { Button } from "reactstrap";

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
          <Link to="/home">Home</Link>
          <br />
          <Link to="/">Login</Link>
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
