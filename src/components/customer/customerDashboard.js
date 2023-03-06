import { useEffect, useState } from "react";

const CustomerDashboard = () => {
  let [userData, setUserData] = useState({});
  useEffect(() => {
    var user = window.localStorage.getItem("user");
    setUserData(() => JSON.parse(user));
  }, []);

  return (
    <>
      <div className="customer-dashboard">
        <div>
          <h1>{userData._id} This is the CustomerDashboard page!</h1>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
