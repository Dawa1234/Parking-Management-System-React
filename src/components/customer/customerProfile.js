import { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "../../design/customer/customerProfile.css";
import useServices from "../../services/useServices";

const CustomerProfile = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [userImage, setUserImage] = useState();
  const [disabled, setDisabled] = useState(true);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    var user = JSON.parse(window.localStorage.getItem("user"));
    setFullname(() => user.fullname);
    setUsername(() => user.username);
    setEmail(() => user.email);
    setContact(() => user.contact);
    setUserData(() => user);
  }, []);
  const selectImage = (e) => {
    const selectedFile = e.target.files;
    // console.log(selectedFile);
    const selectedImageArray = Array.from(selectedFile);
    // console.log(selectedImageArray);
    const imageArray = selectedImageArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setUserImage(imageArray);
  };

  let buttonStyle = {
    display: "none",
  };

  const updateProfile = () => {
    let data = {
      fullname: fullname,
      username: username,
      image: userImage,
      email: email,
      contact: contact,
    };
    window.alert(userData._id);
    useServices
      .upadteProfile(data, userData._id)
      .then((response) => {
        setUserData(() => response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="customer-profile">
        <div className="profile-form">
          <div className="profile-pic">
            <span>
              <img src={userImage} height="200" width="200" draggable />
            </span>
            <div>
              <Button color="primary">
                <Label for="file">Change Pic</Label>
                {
                  <Input
                    accept="image/jpg , image/jpeg , image/png"
                    id="file"
                    style={buttonStyle}
                    onChange={selectImage}
                    type="file"
                  />
                }
              </Button>{" "}
              <Button
                onClick={() => setUserImage(() => undefined)}
                color="danger"
              >
                Remove Photo
              </Button>
            </div>
          </div>
          <Form>
            <Row>
              <Col md={6}>
                <Label>Full Name</Label>
                <FormGroup>
                  <Input
                    value={fullname}
                    onChange={(e) => setFullname(() => e.target.value)}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <Label>Username</Label>
                <FormGroup>
                  <Input
                    value={username}
                    onChange={(e) => setUsername(() => e.target.value)}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Label>Email</Label>
                <FormGroup>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(() => e.target.value)}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <Label>Contact</Label>
                <FormGroup>
                  <Input
                    value={contact}
                    onChange={(e) => setContact(() => e.target.value)}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <div>
            <Button
              onClick={() => setDisabled(() => false)}
              color="primary"
              id="book-slot"
            >
              Edit
            </Button>{" "}
            <Button
              onClick={() => updateProfile()}
              color="primary"
              id="book-slot"
              disabled={disabled}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
