import { useEffect, useState } from "react";
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
  // For validation
  const [isfullnameInvalid, setIsfullnameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isContactInvalid, setIsContactInvalid] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] =
    useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // To get the data.
  useEffect(() => {
    // Fullname
    if (fullname === "") {
      setIsfullnameInvalid(true);
    } else {
      setIsfullnameInvalid(false);
    }
    // Contact
    if (contact === "") {
      setIsContactInvalid(true);
    } else {
      setIsContactInvalid(false);
    }
    // Email
    if (email === "") {
      setIsEmailInvalid(false);
    } else {
      if (!email.match("@")) {
        setIsEmailInvalid(true);
      }
    }
    // Username
    if (username === "") {
      setIsUsernameInvalid(true);
    } else {
      setIsUsernameInvalid(false);
    }
    // Password
    if (password !== confirmPassword) {
      setIsPasswordInvalid(true);
      setIsConfirmPasswordInvalid(true);
    } else {
      setIsPasswordInvalid(false);
      setIsConfirmPasswordInvalid(false);
    }

    if (
      !isfullnameInvalid ||
      !isContactInvalid ||
      !isUsernameInvalid ||
      !isEmailInvalid ||
      !isPasswordInvalid
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [fullname, email, contact, username, password, confirmPassword]);

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
    let userData = {
      fullname: fullname,
      email: email,
      contact: contact,
      username: username,
      password: password,
    };
    // Send data to api
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
              <Button onClick={registerUser} disabled={buttonDisabled}>
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
