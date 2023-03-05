import { useState } from "react";
import { FormGroup, Input, Form, Label, Row, Col, Button } from "reactstrap";
import "../../design/customer/payment.css";
import parkingSlotServices from "../../services/parkingSlotServices";

const PaymentPage = ({
  selectedSlots,
  amount,
  category,
  setAllParkingSlots,
}) => {
  const [khalti, setKhalti] = useState("");
  const [mpin, setMpin] = useState("");
  const [validkhalti, setValidKhalti] = useState(false);
  const [validmpin, setValidMpin] = useState(false);
  const payAmount = () => {
    if (khalti === "" && mpin === "") {
      setValidKhalti(true);
      setValidMpin(true);
      return;
    }
    if (khalti === "") {
      setValidKhalti(true);
      return;
    }
    if (mpin === "") {
      setValidKhalti(false);
      setValidMpin(true);
      return;
    }
    setValidKhalti(false);
    setValidMpin(false);
    const date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} Date`;
    let data = {
      date: date,
      userId: "aldajkasd",
      amount: amount,
      vehicleCategory: category,
      selectedSlots: selectedSlots,
    };
    // console.log(data);
    parkingSlotServices
      .bookSlots(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="payment-conent">
        <div>
          <h1>
            Payment Process
            <span></span>
          </h1>
        </div>
        <div className="payment-form">
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="amount">Total Amount</Label>
                  <Input id="amount" type="text" value={amount} disabled />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="category">Vehicle Category</Label>
                  <Input id="category" type="text" value={category} disabled />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="account">Khalti Account Number</Label>
                  <Input
                    id="account"
                    type="number"
                    value={khalti}
                    onChange={(e) => setKhalti(() => e.target.value)}
                    invalid={validkhalti}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="pin">Mpin </Label>
                  <Input
                    id="pin"
                    type="text"
                    value={mpin}
                    onChange={(e) => setMpin(() => e.target.value)}
                    invalid={validmpin}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Button onClick={payAmount} id="book-slot">
            Pay/Book
          </Button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
