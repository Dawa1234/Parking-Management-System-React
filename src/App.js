import "./App.css";
import Login from "./components/authentication/loginpage";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomInformation from "./components/bottom_info/bottm_information";
import Register from "./components/authentication/registerpage";

function App() {
  return (
    <>
      {/* Show when toggled */}
      <Register />
      {/* Nav bar */}
      {/* <nav>Navigation Bar</nav> */}
      {/* Nav bar */}

      {/* Main Body  */}
      <div className="App">
        {/* Main content */}
        <div className="content">
          {/* Main content left side */}
          <div>
            {/* Logo */}
            <div className="logo-box">
              <div className="logo">
                <h1>
                  <span className="e">E</span>
                  <span className="park">park</span>
                </h1>
              </div>
            </div>
            {/* break line */}
            <br />
            {/* Left side message */}
            <h1>Park your vehicle on any spot that you like.</h1>
          </div>
          {/* Main content right side (Login UI) */}
          <Login />
        </div>
        <BottomInformation />
      </div>
    </>
  );
}

export default App;
