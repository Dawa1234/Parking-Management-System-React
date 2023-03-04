import { useEffect, useState } from "react";
import parkingSlotServices from "../../services/parkingSlotServices";
import "../../design/dashboardPage/parkingSlot.css";
import { Button, Table } from "reactstrap";
import { useParams } from "react-router-dom";

const ParkingSlotPage = () => {
  const { id } = useParams();
  const [allParkingSlots, setAllParkingSlots] = useState([]);
  // get and set all the data from here
  useEffect(() => {
    // if route is coming from the parameter
    if (id) {
    } else {
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
                <th>Floor Num.</th>
                <th>Vehicle Category</th>
                <th>Booked Status</th>
                <th>Occupied Status</th>
                <th>Booked By</th>
                <th>Action</th>
                <th>Occupy</th>
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
                      <td>{item.floorId}</td>
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
                          id="book-slot"
                          disabled={item.occupied}
                          onClick={() => handleOccupiedSlot(item._id)}
                        >
                          Occupy
                        </Button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ParkingSlotPage;
