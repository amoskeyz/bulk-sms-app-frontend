/* eslint-disable max-len */
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Loader from '../../Components/Loader';

const Report = () => (
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
      <div className="w-100 mt-5 align-items-center">
        {/*  */}
        <div className="table-responsive-lg">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="text-center">Time</th>
                <th scope="col" className="text-center">Sender ID</th>
                <th scope="col" className="text-center" style={{ width: '400px' }}>Message</th>
                <th scope="col" className="text-center">Recipient</th>
                <th scope="col" className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td className="text-center">{`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}</td>
                <td className="text-center">
                  DivinePav
                </td>
                <td className="text-center">
                    Beloved this is to inform you that lets go-a-fishing starts 2moro by 9am
                </td>
                <th className="text-center">300</th>
                <th className="text-center text-success">
                  <DoneAllIcon />
                  {' '}
Delivered
                </th>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td className="text-center">{`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}</td>
                <td className="text-center">
                  DivinePav
                </td>
                <td className="text-center">
                    Beloved this is to inform you that lets go-a-fishing starts 2moro by 9am
                </td>
                <th className="text-center">260</th>
                <th className="text-center text-success">
                  <DoneAllIcon />
                  {' '}
Delivered
                </th>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td className="text-center">{`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}</td>
                <td className="text-center">
                  DivinePav
                </td>
                <td className="text-center">
                    Beloved this is to inform you that lets go-a-fishing starts 2moro by 9am
                </td>
                <th className="text-center">260</th>
                <th className="text-center text-danger">
                  <ErrorOutlineIcon />
                  {' '}
Not Sent
                </th>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td className="text-center">{`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`}</td>
                <td className="text-center">
                  DivinePav
                </td>
                <td className="text-center">
                    Beloved this is to inform you that lets go-a-fishing starts 2moro by 9am
                </td>
                <th className="text-center">260</th>
                <th className="text-center text-info">
                  <HourglassEmptyIcon />
                  {' '}
Pending
                </th>
              </tr>

            </tbody>
          </table>
        </div>
        {/* <button type="button" className="btn btn-primary w-100">Save Group</button> */}
      </div>
      {/* <button type="button" className="btn btn-primary">Send Now</button> */}
      {/* <Loader /> */}
    </div>
    <div>
      {/* <br /> */}
      {/* <hr /> */}
    </div>
    {/* </div> */}
  </>
);

export default Report;
