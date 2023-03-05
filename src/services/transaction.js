import axios from "axios";
const baseUrl = "http://localhost:3001/transaction";
const config = {
  headers: {
    Authorization: `bearer ${window.localStorage.getItem("token")}`,
  },
};
// get all transaction
const getAllTransaction = async () => {
  return await axios.get(baseUrl, config);
};

export default { getAllTransaction };
