import { useEffect, useState } from "react";
import parkingSlotServices from "../../services/parkingSlotServices";
import "../../design/dashboardPage/parkingSlot.css";
import {
  Button,
  Card,
  Collapse,
  FormGroup,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";
import { useParams } from "react-router-dom";
import PaymentPage from "./payment";

const CustomerParkingSlotPage = () => {
  const { id, category } = useParams();
  const [allParkingSlots, setAllParkingSlots] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  let selectedSlots = [];
  //   For filter
  const toggleFilter = (e) => {
    if (e.target.value == "Available Slots") {
      setQuery(() => "false");
      return;
    }
    if (e.target.value == "Show all") {
      setQuery(() => "");
      return;
    }
  };
  const filteredItem = allParkingSlots.filter((item) => {
    return item.booked.toString().toLowerCase().includes(query.toLowerCase());
  });

  const toggle = () => setIsOpen(!isOpen);
  // get and set all the data from here
  useEffect(() => {
    // if route is coming from the parameter
    if (id) {
      parkingSlotServices
        .getParkingSlotByFloor(id)
        .then((response) => {
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    } else {
      parkingSlotServices
        .getAllParlingSlots()
        .then((response) => {
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // select the selected slots by user
  const bookSlot = (id) => {
    if (!selectedSlots.includes(id)) {
      selectedSlots.push(id);
    } else {
      selectedSlots = selectedSlots.filter((item) => item != id);
    }
    console.log(selectedSlots.length);
  };

  const style1 = {
    width: "280px",
    padding: "10px",
    textAlign: "center",
  };

  const occupied = {
    background: "rgb(255, 99, 99)",
  };
  const booked = {
    background: "yellow",
  };
  const available = {
    background: "rgb(89, 240, 89)",
  };
  const selected = {
    background: "blue",
  };

  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Total Parking Slot</h1>
        <h6>Overall No. of Slots: {allParkingSlots.length}</h6>
      </div>
      <div style={style1}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            id="exampleSelect"
            onChange={(e) => toggleFilter(e)}
            name="select"
            type="select"
          >
            <option>Show all</option>
            <option>Available Slots</option>
          </Input>
        </FormGroup>
      </div>
      {/* Main content */}
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          {/* Table */}
          <Table hover>
            {/* Table Heading */}
            <thead>
              <tr>
                <th>P.Id</th>
                <th>Slot</th>
                <th>Vehicle Category</th>
                <th>Booked Status</th>
                <th>Occupied Status</th>
                <th>Booked By</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {/* If no any slot */}
              {allParkingSlots.length === 0 ? (
                <>
                  <tr>
                    <th>No Data</th>
                    <td>No data</td>
                    <td>No data</td>
                    <td>No data</td>
                    <td>No data</td>
                    <td>No data</td>
                    <td>No data</td>
                    <td>No data</td>
                  </tr>
                </>
              ) : (
                // If slots
                filteredItem.map((item) => {
                  return (
                    <tr
                      style={
                        item.occupied
                          ? occupied
                          : item.booked
                          ? booked
                          : available
                      }
                      key={item._id}
                    >
                      <th scope="row">{item._id}</th>
                      <td>{item.slot}</td>
                      <td>{item.vehicleCategory}</td>
                      <td>{item.booked ? `${"Booked"}` : "Available"}</td>
                      <td>{item.occupied ? "Occupied" : "Not occupied"}</td>
                      <td>
                        {item.booked
                          ? `${
                              item.user === null || item.user === undefined
                                ? "Offline User"
                                : `${item.user.username}`
                            }`
                          : "No user"}
                      </td>
                      {/* Remove button */}
                      <td>
                        <FormGroup>
                          <Input
                            onChange={() => bookSlot(item._id)}
                            type="checkbox"
                            disabled={item.booked || item.occupied}
                          />{" "}
                          <Label check>Book</Label>
                        </FormGroup>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
          <div id="add-floor">
            <Button color="success" onClick={toggle}>
              Book
            </Button>
          </div>
          <Collapse isOpen={isOpen}>
            <PaymentPage />
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default CustomerParkingSlotPage;
