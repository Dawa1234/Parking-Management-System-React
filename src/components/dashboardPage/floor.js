import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import floorServices from "../../services/floorServices";
import parkingSlotServices from "../../services/parkingSlotServices";

const FloorPage = () => {
  const { id } = useParams();
  const [allFloors, setAllFloors] = useState([]);

  useEffect(() => {
    // if route is coming from the parameter
    if (id) {
    } else {
      floorServices
        .getAllFloor()
        .then((response) => {
          setAllFloors(() => response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleAlert = () => {};

  return (
    <>
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Floor Id</th>
                <th>Floor Num.</th>
                <th>Total Parking Slot</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default FloorPage;
