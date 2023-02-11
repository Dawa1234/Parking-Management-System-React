import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../design/loginpage.css";
import useServices from "../services/useServices";

const Login = () => {
  const [UsernameController, setUsernameController] = useState("");
  const [PasswordController, setPasswordController] = useState("");
  const [errormessage, setErrormessage] = useState("");

  // Error message
  useEffect(() => {
    setErrormessage(errormessage);
  }, [errormessage]);

  // Login function
  const login = (e) => {
    e.preventDefault();
    // Function
    useServices
      .LoginFunction(UsernameController, PasswordController)
      .then((response) => {
        window.alert(`${response.data.status}`);
      })
      .catch((err) => {
        // Set error message
        setErrormessage(err.response.data.Error);
        // Animation
        var errorDisplay = document.getElementById("error");
        errorDisplay.style.opacity = "1";
        // Small animation
        setTimeout(() => {
          errorDisplay.style.transition = "0.2s";
          errorDisplay.style.opacity = "0";
        }, 2000);
        // window.alert(`${err.response.data.Error}`);
      });
  };

  // Register window
  const registerWindow = (e) => {
    e.preventDefault();
    // Regsiter form
    var registerForm = document.getElementById("register");
    // Show register form
    registerForm.style.display = "flex";
  };

  return (
    <>
      <Form>
        <div className="login-box">
          {/* Username */}
          <FormGroup>
            <Input
              onChange={(e) => setUsernameController(e.target.value)}
              name="email"
              placeholder="Email or Username"
              bsSize="lg"
              type="email"
              value={UsernameController}
            ></Input>
          </FormGroup>
          {/* Password */}
          <FormGroup>
            <Input
              onChange={(e) => setPasswordController(e.target.value)}
              value={PasswordController}
              name="password"
              placeholder="Password"
              bsSize="lg"
              type="password"
              className="password"
            ></Input>
          </FormGroup>
          {/* Login button */}
          <FormGroup>
            <div className="submit">
              <Button onClick={login} size="lg" id="login">
                Log in
              </Button>
            </div>
          </FormGroup>
          {/* Error message */}
          <div id="error">
            <small>{errormessage}</small>
          </div>
          {/* Forgot password */}
          <div id="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
          {/* Create an account button */}
          <div className="create-acc">
            <span id="line"></span>
            <Button onClick={registerWindow} id="new-acc">
              Create an account
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
