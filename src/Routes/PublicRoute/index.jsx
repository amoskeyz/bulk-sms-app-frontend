import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/core';
// import ButterToast, { POS_TOP, POS_RIGHT } from 'butter-toast';
import MainNav from '../../Components/MainNav';
import notify from '../../Components/Toast/Notify';
import SideBar from '../../Components/SideBar';
import { getUser } from '../../Store/actions/SignUp';
import Loader from '../../Components/Loader';
import NetworkError from '../../Components/NetworkError';
// import { couponAction } from '../../Store/actions/Coupon';
// import { clearLocalStorage } from '../../utils';

const PublicRoute = ({
  component: Component, isAuthenticated, setUser, isLoading, error, ...props
}) => {
  useEffect(() => {
    setUser();
  }, [isAuthenticated]);

  return (
    <>
      {/* {console.log(isLoading)} */}
      {error === 'You are Logged out. Kindly Login to continue' && <Redirect to="/signin" />}
      {error && error !== 'You are Logged out. Kindly Login to continue' && <NetworkError />}
      {isLoading && !error && (
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
      )}
      {!isLoading && !error && props.user.email && (
      <div className="Dashboard">
        <div className="sidebar img" id="sidebar">
          <h1>90kobo SMS</h1>
          <div className="sider">
            <SideBar {...props} />
          </div>
        </div>
        <div className="mane">
          <div className="d-flex">
            <MainNav {...props.user} />
          </div>
          <Route
            {...props}
            render={innerProps => <Component {...innerProps} />}
          />
        </div>
        {/* {notify()} */}
      </div>
      )
}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        rtl={false}
        pauseOnHover
        toastClassName={
        css(
          { fontFamily: 'Varela, cursive', fontSize: '11px' },
        )
          }
      />
    </>
  );
};

// export default PublicRoute;

export const setUser = () => getUser();

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isLoading: state.auth.isLoading,
  error: state.auth.error,
});

export default connect(mapStateToProps, { setUser })(PublicRoute);
