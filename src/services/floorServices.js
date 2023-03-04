import axios from "axios";
const baseUrl = "http://localhost:3001/floor";
const baseUrlVehicle = "http://localhost:3001/vehicle";
const config = {
  headers: {
    Authorization: `bearer ${window.localStorage.getItem("token")}`,
  },
};

// get all floor
const getAllFloor = async () => {
  return await axios.get(baseUrl, config);
};

// get all floor from a vehicle category
const getAllFloorByCategory = async (category) => {
  return await axios.get(`${baseUrlVehicle}/${category}`, config);
};

// add a floor in a vehicle category
const addFloorByCategory = async (vehicleId, floorNum) => {
  // For req.body
  let data = {
    floorNum: floorNum,
  };
  return await axios.post(`${baseUrlVehicle}/${vehicleId}`, data, config);
};

// delete floor
const deleteFloor = async (vehicleId, floorId) => {
  // For req.body
  return await axios.delete(
    `${baseUrlVehicle}/${vehicleId}/${floorId}`,
    config
  );
};

export default {
  getAllFloor,
  getAllFloorByCategory,
  addFloorByCategory,
  deleteFloor,
};
