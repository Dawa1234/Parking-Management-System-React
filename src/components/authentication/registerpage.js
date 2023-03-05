import { useState } from "react";
import { Button, Form, FormGroup, FormFeedback, Input } from "reactstrap";
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
  // For validation
  const [isfullnameInvalid, setIsfullnameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isContactInvalid, setIsContactInvalid] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] =
    useState(false);
  const [passwordMatch, setPasswordMatchInvalid] = useState(false);

  //   Assign Values
  const ChangeFullname = (e) => {
    setFullname(e.target.value);
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
    if (
      fullname === "" &&
      email === "" &&
      username === "" &&
      contact === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setIsConfirmPasswordInvalid(true);
      setIsPasswordInvalid(true);
      setIsContactInvalid(true);
      setIsUsernameInvalid(true);
      setIsEmailInvalid(true);
      setIsfullnameInvalid(true);
      return;
    }
    if (fullname !== "") {
      setIsfullnameInvalid(false);
      if (email !== "") {
        setIsEmailInvalid(false);

        if (username !== "") {
          setIsUsernameInvalid(false);

          if (contact !== "") {
            setIsContactInvalid(false);

            if (password !== "") {
              setIsPasswordInvalid(false);

              if (confirmPassword !== "") {
                if (password === confirmPassword) {
                  setIsConfirmPasswordInvalid(false);
                  setIsPasswordInvalid(false);
                  setIsContactInvalid(false);
                  setIsUsernameInvalid(false);
                  setIsEmailInvalid(false);
                  setIsfullnameInvalid(false);
                  setPasswordMatchInvalid(false);
                  let forgetPassword =
                    Math.floor(Math.random() * 99999999) + 11111111;
                  let userData = {
                    fullname: fullname,
                    email: email,
                    contact: contact,
                    username: username,
                    password: password,
                    forgetPassword: forgetPassword,
                  };
                  // Send data to api
                  useServices
                    .RegisteFunction(userData)
                    .then((response) => {
                      window.alert("Registered Successfully");
                      var regsiterForm = document.getElementById("register");
                      regsiterForm.style.display = "none";
                      setFullname("");
                      setEmail("");
                      setContact("");
                      setUsername("");
                      setPassword("");
                      setConfirmPassword("");
                      setIsConfirmPasswordInvalid(false);
                      setIsPasswordInvalid(false);
                      setIsContactInvalid(false);
                      setIsUsernameInvalid(false);
                      setIsEmailInvalid(false);
                      setIsfullnameInvalid(false);
                      setPasswordMatchInvalid(false);
                    })
                    .catch((err) => {
                      window.alert(`${err.response.data.error}`);
                    });
                } else {
                  setIsConfirmPasswordInvalid(true);
                  setIsPasswordInvalid(true);
                  setPasswordMatchInvalid(true);
                }
              } else {
                setIsConfirmPasswordInvalid(true);
              }
            } else {
              setIsPasswordInvalid(true);
            }
          } else {
            setIsContactInvalid(true);
          }
        } else {
          setIsUsernameInvalid(true);
        }
      } else {
        setIsEmailInvalid(true);
      }

      return;
    } else {
      setIsfullnameInvalid(true);
    }
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
    setIsConfirmPasswordInvalid(false);
    setIsPasswordInvalid(false);
    setIsContactInvalid(false);
    setIsUsernameInvalid(false);
    setIsEmailInvalid(false);
    setIsfullnameInvalid(false);
    setPasswordMatchInvalid(false);
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
                  onChange={ChangeFullname}
                  name="fullname"
                  placeholder="Fullname"
                  bsSize="lg"
                  type="text"
                  value={fullname}
                  invalid={isfullnameInvalid}
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
                  invalid={isEmailInvalid}
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
                  invalid={isContactInvalid}
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
                  invalid={isUsernameInvalid}
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
                  invalid={isPasswordInvalid}
                />
                <FormFeedback valid={false}>
                  Password did not match!
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={changeConfirmPassword}
                  value={confirmPassword}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  bsSize="lg"
                  type="password"
                  invalid={isConfirmPasswordInvalid}
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
