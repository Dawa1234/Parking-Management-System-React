import { useEffect, useState } from "react";
import "../../design/dashboardPage/dashBoardPage.css";
import floorServices from "../../services/floorServices";
import vehicleService from "../../services/vehicleService";
import parkingSlotServices from "../../services/parkingSlotServices";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [allFloor, setAllFloors] = useState([]);
  const [allParkingSlot, setAllParkingSlot] = useState([]);
  const [allVehicle, setAllVehicle] = useState([]);
  useEffect(() => {
    // set floors
    floorServices
      .getAllFloor()
      .then((response) => {
        setAllFloors(() => response.data);
        // retrive the value and revert into json object to set the user value
        var admin = window.localStorage.getItem("admin");
      })
      .catch((err) => console.log(err));
    // set vehicle
    vehicleService
      .getAllVehicle()
      .then((response) => {
        setAllVehicle(() => response.data.vehicle);
      })
      .catch((err) => console.log(err));
    // set parkingSlots
    parkingSlotServices
      .getAllParlingSlots()
      .then((response) => {
        setAllParkingSlot(() => response.data.parkingSlots);
      })
      .catch((err) => console.log(err));
  }, []);

  const style = {
    width: "100%",
    background: "antiquewhite",
    height: "100px",
    padding: "30px",
  };

  return (
    <>
      <div className="dashboard">
        {/* Header */}
        <div style={style}>
          <h1>Overall status</h1>
        </div>
        {/* Body */}
        <div className="dashboard-body-admin">
          <Link id="nav-link" to="vehicle">
            <div>
              <h2>Vehicle Status</h2>
              <h4>Total Vehicle: {allVehicle.length}</h4>
            </div>
          </Link>
          <Link id="nav-link" to="floor">
            <div>
              <h2>Floor Status</h2>
              <h4>Total Floor(s): {allFloor.length}</h4>
            </div>
          </Link>
          <Link id="nav-link" to="parkingSlot">
            <div>
              <h2>Parking Status</h2>
              <h4>Total Parking Slot: {allParkingSlot.length}</h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
