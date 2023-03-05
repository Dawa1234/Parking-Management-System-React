import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Table } from "reactstrap";
import vehicleService from "../../services/vehicleService";

const CustomerVehiclePage = () => {
  const { id } = useParams();
  const [allVehicle, setAllVehicle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // if route is coming from the parameter
    if (id) {
    } else {
      vehicleService
        .getAllVehicle()
        .then((response) => {
          setAllVehicle(() => response.data.vehicle);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const navigateToFloor = (category) => {
    // window.alert(category);
    navigate(`/user/dashboard/floor/${category}`);
  };

  return (
    <>
      {/* Heading Part */}
      <div className="parkingSlot-header">
        <h1>Vehicle Category</h1>
      </div>
      <div className="parkingSlot-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Category ID</th>
                <th>Total floor(s)</th>
                <th>Vehicle Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allVehicle.map((item) => {
                return (
                  <tr key={item._id}>
                    <th>{item._id}</th>
                    <td>{item.floor.length}</td>
                    <th>{item.vehicleCategory}</th>
                    <td>
                      <Button
                        onClick={() => navigateToFloor(item.vehicleCategory)}
                        id="book-slot"
                        color="success"
                      >
                        Detail
                      </Button>
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

export default CustomerVehiclePage;
