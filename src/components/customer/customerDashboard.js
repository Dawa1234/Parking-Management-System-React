import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "../../design/customer/customerDashboard.css";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  let [userData, setUserData] = useState({});
  useEffect(() => {
    var user = window.localStorage.getItem("user");
    setUserData(() => JSON.parse(user));
  }, []);
  const navigateToPage = (page) => {
    if (page === "vehicle") {
      navigate("/user/dashboard/vehicle");
      return;
    }
    if (page === "floor") {
      navigate("/user/dashboard/floor");
      return;
    }
    if (page === "parkingSlot") {
      navigate("/user/dashboard/parkingSlot");
      return;
    }
  };
  return (
    <>
      <div className="customer-dashboard">
        <div className="contents">
          <div className="lower-content">
            <div>
              <p>Choose vehicle category as desired.</p>
            </div>
            <div class="view-more">
              <Button onClick={() => navigateToPage("vehicle")} color="primary">
                View More
              </Button>
            </div>
          </div>
        </div>
        <div className="contents1">
          <div className="lower-content">
            <div>
              <p>View all the floor that are abailable in the building. </p>
            </div>
            <div class="view-more">
              <Button onClick={() => navigateToPage("floor")} color="primary">
                View More
              </Button>
            </div>
          </div>
        </div>
        <div className="contents2">
          <div className="lower-content">
            <div>
              <p>
                Book slot, complete the payment process, have your slot as
                booked. Pretty straightforward.
              </p>
            </div>
            <div class="view-more">
              <Button
                onClick={() => navigateToPage("parkingSlot")}
                color="primary"
              >
                View More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
