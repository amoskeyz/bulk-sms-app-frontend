/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { css } from '@emotion/core';
import { Link, Redirect } from 'react-router-dom';
import './SignIn.scss';
import callToast from '../../Components/Toast';
import Loader from '../../Components/Loader';
import {
  signInAction,
  cleanUpAuth,
  getUserAction,
} from '../../Store/actions/SignIn';
// import { clearLocalStorage } from '../../utils';

const SignIn = ({
  showPassword,
  onSignIn,
  onEmail,
  error,
  isCompleted,
  isLoading,
  cleanUp,
  // history,
}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!showPassword) onEmail(values.email);

    if (showPassword) onSignIn(values);
  };

  const onChange = (e) => {
    e.persist();
    // toastDemo();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    // clearLocalStorage();
    // console.log(history);

    if (isCompleted && !error) {
      // toastDemo('signin successful');
      callToast('Login successful', 'success');
      // setTimeout((history && history.push('/compose')), 20000);
        <Redirect to="/compose" />;
    }
    if (error) {
      callToast(error, 'error');
    }

    return () => {
      cleanUp();
    };
  }, [isCompleted, error]);

  return (
    <div className="Sign-in">
      {isCompleted && <Redirect to="/compose" />}
      <div className="ou">
        <div className="sign">
          <div>
            <h1>90Kobo SMS</h1>
            <div className="h2">LOG IN</div>
            <div className="glad">Glad to have you back</div>
            <form style={{ display: 'block' }} id="submit" onSubmit={onSubmit}>
              <br />
              <br />
              <div className="email">
                <label>Email Address or Access code</label>
                <br />
                <input type="email" required onChange={onChange} name="email" />
              </div>
              <br />
              { showPassword
                ? (
                  <div className="password">
                    <label>Password</label>
                    <br />
                    <input type="password" required onChange={onChange} name="password" />
                  </div>
                ) : '' }
              <br />
              <button type="submit" className="bbtn">
                {' '}
                {isLoading ? (
                  <Loader
                    size={12}
                    color="white
                  "
                  />
                ) : <div className="nex">Sign In</div>}
              </button>
            </form>
            <div className="for">
              <p>
                Don&apos;t have an account yet?
                <Link to="/signup">Become a member</Link>
              </p>
              <a href="/#">Forgot Password?</a>
            </div>
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
    </div>
  );
};

const mapStateToProps = state => ({
  showPassword: state.auth.showPassword,
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  user: state.auth.user,
  isCompleted: state.auth.isCompleted,
  isAuthenticated: state.auth.isAuthenticated,
});

/* istanbul ignore next */
export const onSignIn = newUser => signInAction(newUser);
export const cleanUp = () => cleanUpAuth();
export const onEmail = mail => getUserAction(mail);
/* istanbul ignore next */
//   export const socialSignIn = userObj => socialSignInAction(userObj);

export const SignInComponent = SignIn;

export default connect(mapStateToProps, { onSignIn, onEmail, cleanUp })(
  SignIn,
);

// export default SignIn;
