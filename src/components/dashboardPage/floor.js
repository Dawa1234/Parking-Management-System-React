import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, CardBody, Collapse, Table } from "reactstrap";
import floorServices from "../../services/floorServices";
import "../../design/dashboardPage/floor.css";
import NewFloor from "./newFloor";

const FloorPage = () => {
  let { category } = useParams();
  const [disable, setDisable] = useState(true);
  const [allFloors, setAllFloors] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    // if route is coming from the parameter
    if (category) {
      setDisable(false);
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

  const navigateToParkingSlot = (floorId) => {
    // window.alert(category);
    navigate(`/dashboard/parkingSlot/${floorId}/${category}`);
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
                <th>More</th>
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
                          disabled={disable}
                        >
                          Delete
                        </Button>
                      }
                    </td>
                    <td>
                      {/* Detail button */}
                      {
                        <Button
                          onClick={() => navigateToParkingSlot(item._id)}
                          color="primary"
                          id="book-slot"
                        >
                          Detail
                        </Button>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {category === undefined || category === "" ? (
            <></>
          ) : (
            // New Floor button
            <div id="add-floor">
              <Button onClick={toggle} color="success">
                New Floor
              </Button>
            </div>
          )}
          {/* Add floor field */}
          <Collapse isOpen={isOpen}>
            <Card>
              {/* asdklaskdj */}
              <div>
                <NewFloor
                  category={category}
                  vehicleId={vehicleId}
                  setAllFloors={setAllFloors}
                />
              </div>
            </Card>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default FloorPage;
