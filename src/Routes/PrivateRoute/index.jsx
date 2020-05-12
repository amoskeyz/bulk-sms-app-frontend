import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/core';
import MainNav from '../../Components/MainNav';
import SideBar from '../../Components/SideBar';
import Profile from '../../pages/Profile';

const PrivateRoute = ({ component: Component, isAuthenticated, ...props }) => (
  <>
    {console.log(props)}
    <div className="Dashboard">
      <div className="sidebar">
        <div className="sider">
          <SideBar {...props} />
        </div>
      </div>
      <div className="mane">
        <div className="d-flex">
          {/* <MainNav /> */}
          <MainNav {...props.user} />
        </div>
        <Profile {...props} />
        <div className="checkScroll">
          <Route
            {...props}
            render={innerProps => <Component {...innerProps} />}
          />
        </div>
      </div>
    </div>
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

// export default PrivateRoute;


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(PrivateRoute);
