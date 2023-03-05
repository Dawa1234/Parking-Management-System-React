import { useEffect, useState } from "react";
import parkingSlotServices from "../../services/parkingSlotServices";
import "../../design/dashboardPage/parkingSlot.css";
import { Button, Card, Collapse, Table } from "reactstrap";
import { useParams } from "react-router-dom";
import NewSlot from "./newSlot";

const ParkingSlotPage = () => {
  const { id, category } = useParams();
  const [allParkingSlots, setAllParkingSlots] = useState([]);
  const [disable, setDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // get and set all the data from here
  useEffect(() => {
    // if route is coming from the parameter
    if (id) {
      if (category === undefined || category === "undefined") {
        setDisable(true);
      }
      parkingSlotServices
        .getParkingSlotByFloor(id)
        .then((response) => {
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    } else {
      setDisable(true);
      parkingSlotServices
        .getAllParlingSlots()
        .then((response) => {
          setAllParkingSlots(() => response.data.parkingSlots);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // Occupy the selected slots
  const handleOccupiedSlot = (id) => {
    parkingSlotServices
      .occupySlot(id)
      .then((response) => {
        // set the new data
        let updateSlots = allParkingSlots.map((slots) => {
          if (slots._id === id) {
            return response.data;
          }
          return slots;
        });
        // update the page
        setAllParkingSlots(() => updateSlots);
      })
      .catch((err) => console.log(err));
  };

  // Remove the occupied selected slots
  const RemoveOccupiedSlot = (id) => {
    parkingSlotServices
      .removeOccupiedSlot(id)
      .then((response) => {
        // set the new data
        let updateSlots = allParkingSlots.map((slots) => {
          if (slots._id === id) {
            return response.data;
          }
          return slots;
        });
        // update the page
        setAllParkingSlots(() => updateSlots);
      })
      .catch((err) => console.log(err));
  };

  const toggleButton = () => {
    let newFloorContent = document.getElementById("new-slot");
    newFloorContent.style.display = "flex";
  };

  const deleteSlot = (slotId) => {
    parkingSlotServices.deleteSlot(id, slotId).then((response) => {
      setAllParkingSlots(() => response.data);
    });
  };

  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Total Parking Slot</h1>
        <h6>Overall No. of Slots: {allParkingSlots.length}</h6>
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
                <th>Occupy</th>
                <th>Danger</th>
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
                    <td>No data</td>
                  </tr>
                </>
              ) : (
                // If slots
                allParkingSlots.map((item) => {
                  return (
                    <tr key={item._id}>
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
                        <Button
                          color="primary"
                          id="book-slot"
                          disabled={!item.booked}
                          onClick={() => RemoveOccupiedSlot(item._id)}
                        >
                          Remove
                        </Button>
                      </td>
                      {/* Occupied button */}
                      <td>
                        <Button
                          color="primary"
                          id="book-slot"
                          disabled={item.occupied}
                          onClick={() => handleOccupiedSlot(item._id)}
                        >
                          Occupy
                        </Button>
                      </td>
                      <td>
                        <Button
                          color="danger"
                          id="book-slot"
                          disabled={disable ? true : item.occupied}
                          onClick={() => deleteSlot(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
          {/* New slot button */}
          {category === undefined || category === "undefined" ? (
            ""
          ) : (
            <div id="add-floor">
              <Button onClick={toggle} color="success">
                New Slot
              </Button>
            </div>
          )}
          {/* add floor content */}
          <Collapse isOpen={isOpen}>
            <Card>
              <div>
                <NewSlot
                  floorId={id}
                  category={category}
                  setAllParkingSlots={setAllParkingSlots}
                />
              </div>
            </Card>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default ParkingSlotPage;
