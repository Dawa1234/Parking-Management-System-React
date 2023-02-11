import { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "../../design/authentication_css/reigsterpage.css";
import useServices from "../../services/useServices";

const Register = () => {
  //Hooks
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   Assign Values
  const changeFullname = (e) => {
    setFullname(e.target.value);
    // console.log(fullname);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const changeContact = (e) => {
    setContact(e.target.value);
    // console.log(contact);
  };
  const changeUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };
  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    // console.log(confirmPassword);
  };

  // Regsiter new user
  const registerUser = (e) => {
    e.preventDefault();
    let userData = {
      fullname: fullname,
      email: email,
      contact: contact,
      username: username,
      password: password,
    };
    // console.log(fullname);
    // console.log(email);
    // console.log(contact);
    // console.log(username);
    // console.log(password);
    useServices
      .RegisteFunction(userData)
      .then((response) => {
        window.alert(`${response.data.status}`);
      })
      .catch((err) => {
        window.alert(`${err.response.data.error}`);
      });
  };

  //   Close the regsiter form
  const closeForm = (e) => {
    e.preventDefault();
    var regsiterForm = document.getElementById("register");
    regsiterForm.style.display = "none";
    setFullname("");
    setEmail("");
    setContact("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Form>
        {/* Outside Layer */}
        <div id="register">
          {/* Inside content [Register box] */}
          <div className="form">
            {/* Header place */}
            <header>
              {/* Close button */}
              <span onClick={closeForm}>X</span>
              {/* Info */}
              <h1>Sign Up</h1>
              {/* Small info */}
              <small>Validation applied</small>
            </header>
            <div className="inside-form">
              {/* Full name */}
              <FormGroup>
                <Input
                  onChange={changeFullname}
                  name="fullname"
                  placeholder="Fullname"
                  bsSize="lg"
                  type="text"
                  value={fullname}
                />
              </FormGroup>
              {/* Email */}
              <FormGroup>
                <Input
                  onChange={changeEmail}
                  value={email}
                  name="email"
                  placeholder="Email"
                  bsSize="lg"
                  type="email"
                />
              </FormGroup>
              {/* Contact */}
              <FormGroup>
                <Input
                  onChange={changeContact}
                  value={contact}
                  name="contact"
                  placeholder="Contact"
                  bsSize="lg"
                  type="text"
                />
              </FormGroup>
              {/* Username */}
              <FormGroup>
                <Input
                  onChange={changeUsername}
                  value={username}
                  name="username"
                  placeholder="Username"
                  bsSize="lg"
                  type="text"
                />
              </FormGroup>
              {/* Password */}
              <FormGroup>
                <Input
                  onChange={changePassword}
                  value={password}
                  name="password"
                  placeholder="Password"
                  bsSize="lg"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={changeConfirmPassword}
                  value={confirmPassword}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  bsSize="lg"
                  type="password"
                />
              </FormGroup>
              {/* Register button */}
              <Button onClick={registerUser}>Sign up</Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
