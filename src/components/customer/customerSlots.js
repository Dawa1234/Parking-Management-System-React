import { useEffect, useState } from "react";
import parkingSlotServices from "../../services/parkingSlotServices";
import "../../design/dashboardPage/parkingSlot.css";
import { Button, Collapse, FormGroup, Input, Label, Table } from "reactstrap";
import { useParams } from "react-router-dom";
import PaymentPage from "./payment";

const CustomerParkingSlotPage = () => {
  const { id } = useParams();
  const [allParkingSlots, setAllParkingSlots] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  let [categoryVehicle, setCategoryVehicle] = useState("");
  let [amount, setAmount] = useState("");
  let [userData, setUserData] = useState({});
  let [selectedSlots, setSelectedSlots1] = useState([]);
  //   For filter
  const toggleFilter = (e) => {
    if (e.target.value === "Available Slots") {
      setQuery(() => "false");
      return;
    }
    if (e.target.value === "Show all") {
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
      // get the user value
      var user = window.localStorage.getItem("user");
      setUserData(() => JSON.parse(user));
      parkingSlotServices
        .getParkingSlotByFloor(id)
        .then((response) => {
          console.log(response.data.parkingSlots);
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    } else {
      // get the user value
      var user = window.localStorage.getItem("user");
      setUserData(() => JSON.parse(user));
      parkingSlotServices
        .getAllParlingSlots()
        .then((response) => {
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // select the selected slots by user
  const bookSlot = (id, vehicle) => {
    if (!selectedSlots.includes(id)) {
      selectedSlots.push(id);
      console.log(selectedSlots);
      setSelectedSlots1(() => selectedSlots);
      setCategoryVehicle(() => vehicle);
    } else {
      selectedSlots = selectedSlots.filter((item) => item !== id);
      setSelectedSlots1(() => selectedSlots);
    }
    setAmount(() => `${selectedSlots.length * 15}`);
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
                              item.userId === null || item.userId === undefined
                                ? "Other User"
                                : userData._id == item.userId
                                ? "You"
                                : "Other User"
                            }`
                          : "No user"}
                      </td>
                      {/* Select Slots */}
                      <td>
                        <FormGroup>
                          <Input
                            onChange={() =>
                              bookSlot(item._id, item.vehicleCategory)
                            }
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
          {/* Book button */}
          {id ? (
            <div id="add-floor">
              <Button
                color="success"
                onClick={toggle}
                disabled={selectedSlots.length === 0 ? true : false}
              >
                Book
              </Button>
            </div>
          ) : (
            ""
          )}
          {/* Payment content */}
          <Collapse isOpen={selectedSlots.length === 0 ? false : isOpen}>
            <PaymentPage
              floorid={id}
              selectedSlots={selectedSlots}
              amount={amount}
              category={categoryVehicle}
              setAllParkingSlots={setAllParkingSlots}
            />
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default CustomerParkingSlotPage;
