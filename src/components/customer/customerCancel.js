import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import useServices from "../../services/useServices";
import parkingSlotServices from "../../services/parkingSlotServices";

const CustomerCancelSlot = () => {
  const [bookedSlot, setBookedSlot] = useState([]);
  useEffect(() => {
    var user = window.localStorage.getItem("user");
    useServices
      .getBookedSlots(JSON.parse(user)._id)
      .then((response) => {
        setBookedSlot(() => response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const occupied = {
    background: "rgb(255, 99, 99)",
  };
  const booked = {
    background: "yellow",
  };
  const available = {
    background: "rgb(89, 240, 89)",
  };
  const cancelSlot = (slotId) => {
    parkingSlotServices
      .cancelBooking(slotId)
      .then((response) => {
        // console.log(response.data.parkingSlot);
        let updatedSlot = bookedSlot.filter((item) => item._id !== slotId);
        // console.log(updatedSlot);
        setBookedSlot(() => updatedSlot);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Total Parking Slot</h1>
        <h6>Overall No. of Slots:</h6>
      </div>
      {/* Main content */}
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          {/* Table */}
          <Table hover>
            {/* Table Heading */}
            <thead>
              <tr>
                <th>Floor</th>
                <th>Slot</th>
                <th>Vehicle Category</th>
                <th>Booked Status</th>
                <th>Occupied Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {/* If no any slot */}
              {bookedSlot.length === 0 ? (
                <>
                  <tr>
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
                bookedSlot.map((item) => {
                  return (
                    <tr key={item._id}>
                      <th scope="row">{item.floorId}</th>
                      <td>{item.slot}</td>
                      <td>{item.vehicleCategory}</td>
                      <td>{item.booked ? `${"Booked"}` : "Available"}</td>
                      <td>{item.occupied ? "Occupied" : "Not occupied"}</td>
                      {/* Select Slots */}
                      <td>
                        <Button
                          onClick={() => cancelSlot(item._id)}
                          color="danger"
                          id="book-slot"
                        >
                          Cancel
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

export default CustomerCancelSlot;
