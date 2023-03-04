import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  FormText,
  Col,
} from "reactstrap";
import "../../design/dashboardPage/newFloor.css";
import floorServices from "../../services/floorServices";

const NewFloor = ({ category, vehicleId, setAllFloors }) => {
  const [validFloorNum, setValidFloor] = useState(false);
  const [floorNum, setFloorNum] = useState("");

  //   Input value
  const handleFloor = (e) => {
    setFloorNum(e.target.value);
  };

  //  Add floor to the vehicle category
  const addFloor = () => {
    if (floorNum === "") {
      setValidFloor(true);
    } else {
      setValidFloor(false);
      floorServices
        .addFloorByCategory(vehicleId, floorNum)
        .then((response) => {
          setAllFloors(() => response.data);
        })
        .catch((err) => {
          setValidFloor(true);
        });
    }
  };
  const toggleButton = () => {
    let newFloorContent = document.getElementById("new-floor");
    newFloorContent.style.display = "none";
  };
  return (
    <>
      {/* Outside */}
      <div id="new-floor">
        {/* Inside */}
        <div className="form">
          {/* Heading */}
          <div>
            <h3>Add New Floor</h3>
            <span onClick={toggleButton}>X</span>
          </div>
          {/* Body */}
          <div>
            <Form>
              <FormGroup>
                <Label for="floor">Floor Number</Label>
                <Input
                  invalid={validFloorNum}
                  value={floorNum}
                  onChange={(e) => handleFloor(e)}
                />
                <FormFeedback invalid={validFloorNum.toString()}>
                  Either floor already exists or invalid input!
                </FormFeedback>
                <FormText>
                  Do not enter floor number that already exists.
                </FormText>
              </FormGroup>
            </Form>
          </div>
          <div>
            <Form>
              <FormGroup>
                <Label for="vehicle">Vehicle Category</Label>
                <Input valid value={category} disabled />
                <FormText>
                  Go to the vehicle page and click detail specifically to change
                  this value.
                </FormText>
              </FormGroup>
            </Form>
          </div>
          <div>
            <Button onClick={addFloor} id="book-slot" color="success">
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFloor;
