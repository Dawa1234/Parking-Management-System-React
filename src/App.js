import "./App.css";
import Login from "./components/loginpage";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/registerpage";
import BottomInformation from "./components/bottm_information";

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
            <h3>Park your vehicle on any spot that you like.</h3>
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
