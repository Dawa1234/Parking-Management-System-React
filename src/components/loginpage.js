import { Button } from "reactstrap";
import "../design/loginpage.css";

const Login = () => {
  const handelalert = (e) => {
    e.preventDefault();
    window.alert("Reaction completed");
  };

  return (
    <>
      <div className="login">
        This is the login Page.
        <span>
          <Button size="md" color="primary">
            Login
          </Button>
        </span>
      </div>
    </>
  );
};

export default Login;
