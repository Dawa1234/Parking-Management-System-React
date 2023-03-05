import { FormGroup, Input, Form, Label, Row, Col } from "reactstrap";
import "../../design/customer/payment.css";

const PaymentPage = ({ amount, category }) => {
  return (
    <>
      <div className="payment-conent">
        <div>
          <h1>Payment Process</h1>
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
                  <Input id="account" type="number" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="pin">Mpin </Label>
                  <Input id="pin" type="text" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
