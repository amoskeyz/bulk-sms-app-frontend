/* eslint-disable max-len */
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Loader from '../../Components/Loader';


const BuySms = () => (
  <>
    <div className="m-md-1 text-center">
      <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
        {'  '}
        <Button variant="outline-danger">
            Verify Account
        </Button>
      </Alert>
      {/* <Alert variant="info" dismissible /> */}
    </div>
    <div className="mx-5 d-flex justify-content-center">
      <div className="w-50">
        <Alert variant="info">
          <Alert.Heading as="h5" className="text-center font-bold">BANK DEPOSIT / TRANSFER</Alert.Heading>
          {/* <p /> */}
          {/* <hr /> */}
          {/* <p className="mb-0"> */}
          {/* Whenever you need to, be sure to use margin utilities to keep things nice */}
          {/* and tidy. */}
          {/* </p> */}
          <div className="text-center">
            <Alert.Heading as="h6" className="text-center font-bold">**PROCEEDURE***</Alert.Heading>
            <strong>1. Deposit cash at ang GTBank branch or Transfer cash to:</strong>
            <br />
            <p className="ml-5">
              <strong>Name: Amos Oruaroghene</strong>
              <br />
              <strong>Number: 0107629596</strong>
            </p>
            <strong>2. Fill the form below with details of payment</strong>
            <br />
            {/* <br /> */}
            {/* <br /> */}
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-weight-bold">Depositor&#39;s Name</Form.Label>
              <Form.Control type="text" maxLength="11" placeholder="abcd123" />
              <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-weight-bold">Amount</Form.Label>
              <Form.Control type="number" maxLength="11" placeholder="abcd123" />
              <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="font-weight-bold">userName</Form.Label>
              <Form.Control type="text" maxLength="11" placeholder="abcd123" />
              <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
            </Form.Group>
          </Form>
          <button type="button" className="btn btn-primary">Submit</button>
        </Alert>
        {/* <div className="buut"> */}
        {/* <button type="button" className="btn btn-primary">Send Now</button> */}
        {/* <button type="button" className="btn btn-outline-primary">Use free sms unit</button> */}
        {/* </div> */}
      </div>
    </div>
    {/* </div> */}
  </>
);

export default BuySms;
