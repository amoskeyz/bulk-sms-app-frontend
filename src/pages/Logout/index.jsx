import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearLocalStorage } from '../../utils';
import Loader from '../../Components/Loader';
import { getUser } from '../../Store/actions/SignUp';


const Logout = ({ isUser, error }) => {
  useEffect(() => {
    clearLocalStorage();
    isUser('Logout Successful');
  }, []);

  return (
    <>
      {error && <Redirect to="/signin" />}
      <div className=" d-flex" style={{ height: '100vh' }}>
        <div className="text-center m-auto">
          <Loader color=" grey" size={20} />
          <div style={{
            fontFamily: 'Kaushan Script, cursive', fontSize: '25px', fontWeight: 'bold', opacity: 0.6,
          }}
          >
90Kobo SMS
          </div>
        </div>
      </div>
    </>
  );
};

export const isUser = () => getUser();

const mapStateToProps = state => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { isUser })(Logout);
