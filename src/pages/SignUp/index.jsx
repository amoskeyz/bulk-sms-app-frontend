import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Redirect, Link } from 'react-router-dom';
import { css } from '@emotion/core';
import './SignUp.scss';

import Navbar from '../../Components/Navbar';
import callToast from '../../Components/Toast';
import Loader from '../../Components/Loader';
import Input from '../../Components/Input';
import { signUpAction, cleanUpAuth } from '../../Store/actions/SignUp';


// let isLoading = false;
const SignUp = ({
  error, isCompleted, onSignUp, cleanUp, isLoading,
}) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    confirmPassword: '',
    password: '',
    username: '',
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(values.confirmPassword);
    const details = values;
    if (values.password !== values.confirmPassword) {
      // console.log('i am here', values);
      callToast('password do not match', 'error');
      return;
    }


    // delete details.confirmPassword;
    onSignUp(details);
  };

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (isCompleted) {
      callToast('Registration successful', 'success');
      /* istanbul ignore next */
      // history && history.push('/');
    }
    if (error) {
      if (error.data) {
        if (Array.isArray(error.data.error)) {
          for (let i = 0; i < error.data.error.length; i += 1) {
            callToast(error.data.error[i], 'error');
          }
        } else callToast(error.data.error, 'error');
      } else callToast(error, 'error');
    }
    /* istanbul ignore next */
    return () => {
      /* istanbul ignore next */
      cleanUp();
    };
  }, [isCompleted, error]);

  return (
    <div>
      <Navbar />
      <div className="Sign-up">
        {isCompleted && <Redirect to="/compose" />}
        <div className="ou">
          <div className="sign">
            <div>
              {/* <h1>90Kobo SMS</h1> */}
              {/* <div className='glad'>Glad to have you back</div> */}
              <div className="sep">
                <div className="h2">SIGN UP</div>
                <div className="sep1">
                  <div className="in1">
                    <div className="in2">
                      <form style={{ display: 'block' }} id="submit" onSubmit={onSubmit}>
                        {/* <br/><br/> */}
                        <div className="fl">
                          <Input
                            className="email"
                            label="First Name"
                            name="firstName"
                            placeholder="firstname"
                            type="text"
                            onChange={onChange}
                            // style={{ width: '90%' }}
                            required
                          />
                          <Input
                            className="email"
                            label="Last Name"
                            name="lastName"
                            placeholder="lastname"
                            type="text"
                            onChange={onChange}
                            // style={{ width: '90%' }}
                            required
                          />
                        </div>
                        <Input
                          className="email"
                          label="Email Address"
                          name="email"
                          placeholder="example@example.com"
                          type="email"
                          onChange={onChange}
                          required
                        />
                        <Input
                          className="email"
                          label="Username"
                          name="username"
                          placeholder="username"
                          type="text"
                          onChange={onChange}
                          required
                        />
                        <div className="fl">
                          <Input
                            className="password"
                            label="Password"
                            name="password"
                            placeholder="password"
                            type="password"
                            onChange={onChange}
                            required
                          />
                          <Input
                            className="password"
                            label="Confirm Password"
                            name="confirmPassword"
                            placeholder="confirm-password"
                            type="password"
                            onChange={onChange}
                            required
                          />
                        </div>
                        {/* <br/> */}
                        <Input
                          className="email"
                          label="Phone Number"
                          name="phoneNumber"
                          placeholder="phone number"
                          type="tel"
                          onChange={onChange}
              //  style = {{ width:'90%' }}
                          required
                        />
                        <br />
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="bbtn"
                        >
                          { isLoading
                            ? (
                              <div>
                                <Loader
                                  size={12}
                                  color="white
                          "
                                />
                              </div>
                            )
                            : <div className="nex">Register</div>
             }
                        </button>
                      </form>
                      <div className="for">
                        <p>
                          Already a user?
                          <Link to="/signin">Login</Link>
                        </p>
                        {/* <a href = '#'>Forgot Password?</a> */}
                      </div>
                    </div>
                  </div>
                  <div className="seperator">
                    <div>
                      <hr />
                      <span>OR</span>
                      <hr />
                    </div>
                  </div>
                  <div className="sep2">
                    <div className="righter">
                      <div>
                        <div className="all-right">
                          <h1>90kobo SMS</h1>
                          <div className="btnnn">
                            <div>
                              <button type="button">
                                <img
                                  src="http://res.cloudinary.com/amoslv/image/upload/v1589364900/Boy%20Creates%20Covid-19%20vaccine-type-news.png"
                                  alt="Bulk sms"
                                />
                               sign up with Google
                              </button>
                            </div>
                            <div>
                              <button type="button">
                                <img
                                  src="http://res.cloudinary.com/amoslv/image/upload/v1589364897/%24Boy%20Creates%20Covid-19%20vaccine-type-news.png"
                                  alt="Bulk sms"
                                />
                              sign up with Facebook
                              </button>
                            </div>
                            <div>
                              <button type="button">
                                <img
                                  src="http://res.cloudinary.com/amoslv/image/upload/v1589364901/Boy%20Creates%20Covid-19%20vaccine-type-news.png"
                                  alt="Bulk sms"
                                />
                                sign up with Twitter
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
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
  user: state.auth.user,
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  isCompleted: state.auth.isCompleted,
  isAuthenticated: state.auth.isAuthenticated,
});

export const onSignUp = user => signUpAction(user);
export const cleanUp = () => cleanUpAuth();

export default connect(mapStateToProps, { onSignUp, cleanUp })(
  SignUp,
);
