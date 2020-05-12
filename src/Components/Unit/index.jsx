import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

const Unit = ({ user }) => (
  <div className="m-md-1 text-center">
    <Alert variant="info">
      <span style={{ marginRight: '20px' }}>
        <strong>Sms unit:</strong>
        {' '}
        {(Number(user.wallet) / 0.9).toFixed(2)}
      </span>
      {'          '}
      <span>
        <strong>Free unit:</strong>
        {' '}
                50
      </span>
    </Alert>
  </div>
);

const mapStateToProps = state => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(Unit);
