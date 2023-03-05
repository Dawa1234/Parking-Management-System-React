import { useEffect, useState } from "react";
import transaction from "../services/transaction";
import "../design/transaction.css";
import { Input, Label, Table } from "reactstrap";

const Transaction = () => {
  const [allTransaction, setAllTransactions] = useState([]);
  const [query, setQuery] = useState("");

  const filteredItem = allTransaction.filter((item) => {
    return item._id.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    transaction
      .getAllTransaction()
      .then((response) => {
        setAllTransactions(() => response.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
        <h1>Transaction Data</h1>
      </div>
      <div style={style1}>
        <Label>Search Box</Label>
        <Input
          value={query}
          onChange={(e) => setQuery(() => e.target.value)}
          placeholder="Search transaction by id"
        />
      </div>
      <div className="transcation-content">
        <div className="parkingSlot-table">
          <Table hover>
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Transaction date</th>
                <th>User Id</th>
                <th>Vehicle Category</th>
                <th>Amount</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {filteredItem.map((item) => {
                return (
                  <tr key={item._id}>
                    <th scope="row">{item._id}</th>
                    <td>{item.date.split(" ")[0]}</td>
                    <td>{item.userId}</td>
                    <td>{item.vehicleCategory}</td>
                    <td>Rs.{item.amount}</td>
                    <td>
                      Online
                      <span></span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
