import axios from "axios";
const baseUrl = "http://localhost:3001/parkingSlot";
const transactionUrl = "http://localhost:3001/user/transaction/booking";
const baseUrlFloor = "http://localhost:3001/floor";
const config = {
  headers: {
    Authorization: `bearer ${window.localStorage.getItem("token")}`,
  },
};

// get all parking Slots function
const getAllParlingSlots = async () => {
  return await axios.get(baseUrl, config);
};

// paymen and book selected slots
const bookSlots = async (data) => {
  return await axios.post(transactionUrl, data, config);
};

// Remove the occupied/booked slots function [Admin]
const removeOccupiedSlot = async (id) => {
  let data = {
    parkingSlots: id,
  };
  return await axios.put(`${baseUrl}/remove`, data, config);
};
// Occupy the slot function [Admin]
const occupySlot = async (id) => {
  let data = {
    parkingSlots: id,
  };
  return await axios.put(`${baseUrl}/occupy`, data, config);
};

// get the parking Slots from floor [Admin]
const getParkingSlotByFloor = async (floorId) => {
  return await axios.get(`${baseUrlFloor}/${floorId}/parkingSlots`, config);
};

// add a parking Slots in a floor [Admin]
const addSlotInFloor = async (floorId, data) => {
  return await axios.put(
    `${baseUrlFloor}/${floorId}/parkingSlots`,
    data,
    config
  );
};

// delete a parking Slots  [Admin]
const deleteSlot = async (floorId, slotId) => {
  return await axios.delete(
    `${baseUrlFloor}/${floorId}/parkingSlots/${slotId}`,
    config
  );
};

export default {
  getAllParlingSlots,
  removeOccupiedSlot,
  occupySlot,
  getParkingSlotByFloor,
  addSlotInFloor,
  deleteSlot,
  bookSlots,
};
