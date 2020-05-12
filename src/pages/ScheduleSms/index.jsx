/* eslint-disable max-len */
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import select from 'bootstrap-select';
// import Col from 'react-bootstrap/Col';
import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// import './Compose.scss';
import Dialog from '../../Components/Dialog';
import MainNav from '../../Components/MainNav';
import SideBar from '../../Components/SideBar';
import Datepicker from '../../Components/Datepicker';
// import Loader from '../../Components/Loader';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import { colourOptions } from '../data';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const ScheduleSms = () => {
  const [labels, setLabels] = useState('');
  const [page, setPage] = useState(0);

  const onChang = (e) => {
    setPage(e.target.value.length);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setLabels(e.target.files[0].name);
  };
  return (
    <div className="Dashboard">
      <div className="sidebar">
        <div className="sider">
          <SideBar />
        </div>
      </div>
      {/* <div> */}
      <div className="mane">
        <div className="d-flex">
          <MainNav />
        </div>
        <div className="m-md-1 text-center">
          {/* <Alert variant="info"> */}
          {' '}
          {/* <h6>COMPOSE SMS</h6> */}
          {/* </Alert> */}
          <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
            {'  '}
            <Button variant="outline-danger">
            Verify Account
            </Button>
          </Alert>
          {/* <Alert variant="info" dismissible /> */}
        </div>
        <div className="mx-5 d-flex justify-content-between">
          <div className="w-50">
            <div className="m-md-1 text-center">
              <Alert variant="info">
                <span style={{ marginRight: '20px' }}>
                  <strong>Sms unit:</strong>
                  {' '}
                555.55
                </span>
                {'          '}
                <span>
                  <strong>Free unit:</strong>
                  {' '}
                50
                </span>
              </Alert>
            </div>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="font-weight-bold">Sender ID</Form.Label>
                <Form.Control type="text" maxLength="11" placeholder="abcd123" />
                {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
              </Form.Group>
              {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold">Destination Numbers</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Seperate multiple numbers with comma ">
                </Form.Control>
                {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="font-weight-bold"> Compose Message</Form.Label>
                <Form.Control as="textarea" rows="6" onChange={onChang} />
                {/* <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback> */}
                {page > 0 ? (
                  <div className="page">
                    <p>
                      <strong>Page:</strong>
                      {' '}
                      {Math.floor(page / 161) + 1}
                    </p>
                    <p>
                      <strong>Character left:</strong>
                      {' '}
                      {(Math.floor(page / 161) + 1) * 160 - page}
                    </p>
                    <p>
                      <strong>Total typed characters:</strong>
                      {' '}
                      {page}
                    </p>
                  </div>
                ) : ''}
              </Form.Group>
            </Form>
            <div className="buut">
              <strong>Select Date: </strong>
              <Datepicker />
              <Dialog text="Send Message" type="outline" group="Schedule message" details={`Message will be sent on ${new Date()}`} />
              {/* <button disabled type="button" className="btn btn-primary">Send Message</button> */}
              {/* <button disabled type="button" className="btn btn-outline-primary">Use free sms unit</button> */}
            </div>
            {/* <button type="submit">Send Now</button> */}
            {/* <button type="submit">User free sms</button> */}
          </div>
          <div className="book m-auto h-50">
            <Alert variant="success">
              {/* <Alert.Heading>Phone Book</Alert.Heading> */}
              <div>
                <strong>Upload Contacts</strong>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile" accept=".csv, .txt" onChange={handleChange} />
                  <label className="custom-file-label" htmlFor="customFile">{ labels === '' ? 'Choose file' : labels }</label>
                  {/* <hr /> */}
                </div>
                {/* <p className="mb-0" /> */}
                {/* <hr /> */}
              </div>
              <hr />
              <strong>Send to groups</strong>
              <Select options={options} isMulti />
              <hr />
              <p />
              <div>
                <strong>Save copy as draft</strong>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter draft title" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
                  </div>
                </div>
              </div>
              <hr />
              <p />
              <div>
                <strong>Save to phonebook</strong>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter a group name" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Save</button>
                  </div>
                </div>
              </div>
              <p />
              <hr />
              <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
              </p>
            </Alert>
          </div>
        </div>
        {/* <Loader /> */}
      </div>
      <div>
        {/* <br /> */}
        {/* <hr /> */}

      </div>
    </div>
  );
};

export default ScheduleSms;
