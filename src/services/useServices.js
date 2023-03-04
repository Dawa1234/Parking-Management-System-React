import axios from "axios";
const baseUrl = "http://localhost:3001/user";

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

export default { LoginFunction, RegisteFunction };
