import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import floorServices from "../../services/floorServices";
import "../../design/dashboardPage/floor.css";

const CustomerFloorPage = () => {
  let { category } = useParams();
  const [allFloors, setAllFloors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // if route is coming from the parameter
    if (category) {
      floorServices
        .getAllFloorByCategory(category)
        .then((response) => {
          setAllFloors(() => response.data[0].floor);
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

  const navigateToParkingSlot = (floorId) => {
    // window.alert(category);
    navigate(`/user/dashboard/parkingSlot/${floorId}/${category}`);
  };

  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Floor Status</h1>
        <h6>Overall Floors: {allFloors.length}</h6>
        <h6>{category ? `Vehicle Category: ${category}` : ""}</h6>
      </div>
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Floor Id</th>
                <th>Floor Num.</th>
                <th>Total Parking Slot</th>
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
        </div>
      </div>
    </>
  );
};

export default CustomerFloorPage;
