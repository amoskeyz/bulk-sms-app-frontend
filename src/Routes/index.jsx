import React, { Fragment } from 'react';
import {
  Route, HashRouter as Router, withRouter, Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/core';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
// import MainNav from '../Components/MainNav';
import Compose from '../pages/Compose';
import CreateGroup from '../pages/CreateGroup';
import ListGroup from '../pages/ListGroup';
import BuySms from '../pages/BuySms';
import Report from '../pages/Report';
import Coupon from '../pages/Coupon';
import Transaction from '../pages/Transaction';
import SentMessage from '../pages/SentMessage';
import MessageSet from '../Components/MessageSet';
import NotificationSet from '../Components/NotificationSet';
import EditProfile from '../Components/EditProfile';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
// import Loader from '../Components/Loader';
import Logout from '../pages/Logout';
// import Profile from '../pages/Profile';
import GA from '../utils/googleAnalytics';
import 'react-toastify/dist/ReactToastify.css';

const app = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PublicRoute path="/dashboard" component={Dashboard} />
      <PublicRoute exact path="/compose" component={Compose} />
      <PublicRoute path="/compose/schedule" component={Compose} />
      <PublicRoute path="/create-group" component={CreateGroup} />
      <PublicRoute path="/list-group" component={ListGroup} />
      <PublicRoute path="/deposit" component={BuySms} />
      <Route path="/logout" component={Logout} />
      <PublicRoute path="/coupon" component={Coupon} />
      <PublicRoute path="/report/delivery" component={Report} />
      <PublicRoute path="/report/message" component={SentMessage} />
      <PublicRoute path="/report/message/schedule" component={SentMessage} />
      <PublicRoute path="/report/transactions" component={Transaction} />
      <PrivateRoute path="/profile/:username/edit" component={EditProfile} />
      <PrivateRoute path="/profile/:username/message" component={MessageSet} />
      <PrivateRoute path="/profile/:username/notification" component={NotificationSet} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar rtl={false} pauseOnHover toastClassName={css({ fontFamily: 'Varela, cursive' })} />
    </Switch>
  </Fragment>
);

const AppWithRouter = withRouter(app);

const Routes = () => (
  <Router>
    { GA.init() && <GA.RouteTracker /> }
    <AppWithRouter />
  </Router>
);

export default Routes;
