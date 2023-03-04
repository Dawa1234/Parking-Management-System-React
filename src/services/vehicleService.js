import axios from "axios";
const baseUrl = "http://localhost:3001/vehicle";
const config = {
  headers: {
    Authorization: `bearer ${window.localStorage.getItem("token")}`,
  },
};

// get all parking Slots function
const getAllVehicle = async () => {
  return await axios.get(baseUrl, config);
};

export default { getAllVehicle };
