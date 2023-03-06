import axios from "axios";
const baseUrl = "http://localhost:3001/user";
const getBookedSlot = "http://localhost:3001/user/bookedSlot";
const config = {
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
};
const config1 = (userId) => {
  return {
    params: {
      userId: userId,
    },
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
};

// Login function
const LoginFunction = async (username, password) => {
  let userCredintials = {
    username: username,
    password: password,
  };
  return await axios.post(`${baseUrl}/login`, userCredintials);
};

// Register function
const RegisteFunction = async (userData) => {
  return await axios.post(`${baseUrl}/register`, userData);
};
// get all the booked slots
const getBookedSlots = async (userId) => {
  return await axios.get(`${getBookedSlot}/${userId}`, config);
};

// update profile
const upadteProfile = async (data, userId) => {
  // console.log(config1(userId));
  return await axios.put(`${baseUrl}/updateProfile`, data, config1(userId));
};

export default {
  LoginFunction,
  RegisteFunction,
  getBookedSlots,
  upadteProfile,
};
