import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import floorServices from "../../services/floorServices";
import "../../design/dashboardPage/floor.css";
import NewFloor from "./newFloor";

const FloorPage = () => {
  const { category } = useParams();
  const [allFloors, setAllFloors] = useState([]);
  const [vehicleId, setVehicleId] = useState("");

  useEffect(() => {
    // if route is coming from the parameter
    if (category) {
      floorServices
        .getAllFloorByCategory(category)
        .then((response) => {
          setAllFloors(() => response.data[0].floor);
          setVehicleId(() => response.data[0]._id);
        })
        .catch((err) => console.log(err));
    } else {
      floorServices
        .getAllFloor()
        .then((response) => {
          setAllFloors(() => response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  // delete floor
  const deleteFloor = (floorId) => {
    floorServices
      .deleteFloor(vehicleId, floorId)
      .then((response) => {
        setAllFloors(response.data);
      })
      .catch((err) => console.log(err));
  };
  const toggleButton = () => {
    let newFloorContent = document.getElementById("new-floor");
    newFloorContent.style.display = "flex";
  };

  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Floor Status</h1>
        <h6>Overall Floors: {allFloors.length}</h6>
      </div>
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Floor Id</th>
                <th>Floor Num.</th>
                <th>Total Parking Slot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allFloors.map((item) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{item._id}</th>
                    <td>{item.floorNum}</td>
                    <td>{item.parkingSlot.length}</td>
                    <td>
                      {/* Delete button */}
                      {
                        <Button
                          onClick={() => deleteFloor(item._id)}
                          color="danger"
                          id="book-slot"
                        >
                          Delete
                        </Button>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {category === undefined ? (
            <></>
          ) : (
            // New Floor button
            <div id="add-floor">
              <Button onClick={toggleButton} color="success">
                New Floor
              </Button>
            </div>
          )}
          {/* Add floor field */}
          <div>
            <NewFloor
              category={category}
              vehicleId={vehicleId}
              setAllFloors={setAllFloors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPage;
