import { useEffect, useState } from "react";
import { Input, Label, Table } from "reactstrap";
import transaction from "../../services/transaction";

const CustomerTransaction = () => {
  let [userData, setUserData] = useState({});
  const [allTransaction, setAlltransaction] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    var user = window.localStorage.getItem("user");
    setUserData(() => JSON.parse(user));
    // get all the transaction of the user
    transaction
      .getUserTransaction(JSON.parse(user)._id)
      .then((response) => {
        setAlltransaction(() => response.data.allTransaction);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredItem = allTransaction.filter((item) => {
    return item.date.toLowerCase().includes(query.toLowerCase());
  });
  const style = {
    background: "antiquewhite",
    padding: "30px",
    textAlign: "center",
  };
  const style1 = {
    width: "280px",
    padding: "30px",
    textAlign: "center",
  };
  return (
    <>
      <div style={style}>
        <h1>Your Transaction(s)</h1>
      </div>
      <div style={style1}>
        <Label>Search Box</Label>
        <Input
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
          placeholder="Search transaction by date"
        />
      </div>
      <div className="transcation-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Transaction date</th>
                <th>Vehicle Category</th>
                <th>Amount</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {filteredItem.length === 0 ? (
                <>
                  <tr>
                    <td>No Transaction</td>
                    <td>No Transaction</td>
                    <td>No Transaction</td>
                    <td>No Transaction</td>
                    <td>No Transaction</td>
                  </tr>
                </>
              ) : (
                filteredItem.map((item) => {
                  return (
                    <tr key={item._id}>
                      <th scope="row">{item._id}</th>
                      <td>{item.date.split(" ")[0]}</td>
                      <td>{item.vehicleCategory}</td>
                      <td>Rs.{item.amount}</td>
                      <td>
                        Online
                        <span></span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CustomerTransaction;
