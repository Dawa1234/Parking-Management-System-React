import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../design/loginpage.css";

const Login = () => {
  const handlealert = (e) => {
    e.preventDefault();
    window.alert("Reaction completed");
  };

  return (
    <>
      <Form>
        <div className="login-box">
          <FormGroup>
            <Input
              name="email"
              placeholder="Email or Username"
              bsSize="lg"
              type="email"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              placeholder="Password"
              bsSize="lg"
              type="password"
              className="password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <div className="submit">
              <Button onClick={handlealert} size="lg" id="login">
                Log in
              </Button>
            </div>
          </FormGroup>
          {/* Create an account button */}
          <div className="create-acc">
            <span id="line"></span>
            <Button id="new-acc">Create an account</Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
