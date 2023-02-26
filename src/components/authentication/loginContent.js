import Login from "./loginpage";
import "../../App.css";

const LoginContent = () => {
  return (
    <>
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
      </div>
    </>
  );
};
export default LoginContent;
