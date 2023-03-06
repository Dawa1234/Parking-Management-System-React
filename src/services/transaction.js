import axios from "axios";
const baseUrl = "http://localhost:3001/transaction";
const userTransactionUrl = "http://localhost:3001/user/transaction";
// to get access
const config = {
  headers: {
    Authorization: `bearer ${window.localStorage.getItem("token")}`,
  },
};
// to get user transactions
const config1 = (userId) => {
  return {
    params: {
      // userId: "63ee7de8dfd4325766d48cd9",
      userId: userId,
    },
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  };
};
// get all transaction
const getAllTransaction = async () => {
  return await axios.get(baseUrl, config);
};

// get all transaction
const getUserTransaction = async (userId) => {
  return await axios.get(userTransactionUrl, config1(userId));
};

export default { getAllTransaction, getUserTransaction };
