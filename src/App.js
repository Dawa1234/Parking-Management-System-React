import "./App.css";
import Login from "./components/loginpage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Nav bar */}
      {/* <nav>Navigation Bar</nav> */}
      {/* Nav bar */}

      {/* Main Body  */}
      <div className="App">
        {/* Main content */}
        <div className="content">
          {/* Main content left side */}
          <div>
            <h1>
              <span>E</span>
              park
            </h1>
            <br />
            <h3>Park your vehicle on any spot that you like.</h3>
          </div>
          {/* Main content right side (Login UI) */}
          <Login />
        </div>
        {/* Bottom information  */}
        <div className="information">Information</div>
      </div>
    </>
  );
}

export default App;
