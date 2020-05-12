import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Board from '../../Components/Board';
import './Dashboard.scss';

const Compose = () => (
  <>
    <div className="m-md-1 text-center">
      <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
        {'  '}
        <Button variant="outline-danger">
            Verify Account
        </Button>
      </Alert>
    </div>
    <div className="carder">
      <Board header="Main Wallet" details="&#8358;  500" footer="User main account wallet" />
      <Board header="Bonus" details="&#8358;  55" footer="User free bonus" />
      {/* <Board header="Bonus" details="&#8358;  50" footer="User main account wallet" /> */}
      <Board header="Main Unit" details="&#8358;  555.55" footer="User main unit" />
      <Board header="Bonus Unit" details="&#8358;  50" footer="User bonus unit" />
      <Board header="Total Sent Messages" details="0" footer="User total sent message" />
      <Board header="No. of Phone Group" details="3" footer="User total phone group" />
      <Board header="Referral Earnings" details="0" footer="User referral bonus" />
      <Board header="Draft" details="0" />
    </div>
  </>
);

export default Compose;
