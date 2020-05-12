import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Verify = () => (
  <div className="m-md-1 text-center">
    <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
      {'  '}
      <Button variant="outline-danger">
            Verify Account
      </Button>
    </Alert>
  </div>
);

export default Verify;
