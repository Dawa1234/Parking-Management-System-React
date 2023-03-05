import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  FormText,
  Row,
  Col,
} from "reactstrap";
import "../../design/dashboardPage/newSlot.css";
import floorServices from "../../services/floorServices";
import parkingSlotServices from "../../services/parkingSlotServices";

const NewSlot = ({ floorId, category, setAllParkingSlots }) => {
  const [validrow, setValidrow] = useState(false);
  const [validcolumn, setValidcolumn] = useState(false);
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");
  const [floorNum, setFloorNum] = useState("");

  //  Add floor to the vehicle category
  const addSlot = () => {
    if (row === "") {
      setValidrow(true);
    } else if (column === "") {
      setValidrow(false);
      setValidcolumn(true);
    } else {
      setValidrow(false);
      setValidcolumn(false);
      let slot = (row + column).toUpperCase();
      let data = {
        floorId: floorId,
        slot: slot,
        row: row.toUpperCase(),
        column: column.toUpperCase(),
        booked: false,
        occupied: false,
        vehicleCategory: category,
      };
      // send request
      parkingSlotServices
        .addSlotInFloor(floorId, data)
        .then((response) => {
          console.log(response);
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => {
          setValidrow(true);
          setValidcolumn(true);
        });
    }
  };
  const toggleButton = () => {
    let newFloorContent = document.getElementById("new-slot");
    newFloorContent.style.display = "none";
  };
  return (
    <>
      {/* Outside */}
      <div id="new-slot">
        {/* Inside */}
        <div className="form">
          {/* Heading */}
          <div>
            <h3>Add New Slot</h3>
          </div>
          {/* Body */}
          <div>
            <Form>
              {/* first row */}
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="rwo-num">Row</Label>
                    <Input
                      value={row}
                      onChange={(e) => setRow(() => e.target.value)}
                      id="row"
                      placeholder="Row (Eg: R-1)"
                      type="text"
                      invalid={validrow}
                    />
                    <FormFeedback invalid={`${validrow.toString()}`}>
                      Either slot is empty or slot already exist.
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="column-num">Column</Label>
                    <Input
                      value={column}
                      onChange={(e) => setColumn(() => e.target.value)}
                      id="column"
                      name="column"
                      placeholder="Column (Eg: C1)"
                      type="text"
                      invalid={validcolumn}
                    />
                  </FormGroup>
                  <FormFeedback invalid={`${validcolumn.toString()}`}>
                    Either slot is empty or slot already exist.
                  </FormFeedback>
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            {/* second row */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="booked">Booked</Label>
                  <Input value="Available" id="booked" type="text" disabled />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="occupied">Ocupied</Label>
                  <Input value="Available" id="occupied" type="text" disabled />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <div>
            <Button onClick={addSlot} id="book-slot" color="success">
              Add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSlot;
