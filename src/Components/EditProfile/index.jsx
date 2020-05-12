import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from '../FormGroup';
import { profileAction } from '../../Store/actions/EditProfile';
import Loader from '../Loader';

const MessageSet = ({
  user, updateProfile, pictureFile, isLoading,
}) => {
  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    phoneNumber: user.phoneNumber,
  });

  const handleChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateProfile({
      values,
      pictureFile,
    }, values.username);
  };

  return (
    <div className="mess mt-3 d-flex jutify-content-center">
      <div className="m-auto w-75">
        <h5>Edit Profile Setting</h5>
        <div className="w-100">
          <Form className="w-50 mt-4" onSubmit={onSubmit}>
            <FormGroup
              label="First Name"
              classname="font-weight-bold w-50 h-75"
              type="text"
              // length="11"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <FormGroup
              label="Last Name"
              classname="font-weight-bold w-50"
              type="text"
              // length="11"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <FormGroup
              label="Username"
              classname="font-weight-bold w-50"
              type="text"
              // length="11"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            <FormGroup
              label="Phone Number"
              classname="font-weight-bold w-50"
              type="tel"
              // length="11"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <Button type="submit" className="w-50" disabled={isLoading}>
              {isLoading ? (
                <Loader
                  size={6}
                  color="white
                  "
                />
              ) : 'Update Profile'}

            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  pictureFile: state.profile.pictureFile,
  isCompleted: state.profile.isCompleted,
  error: state.profile.error,
  isLoading: state.profile.isLoading,
});

export default connect(mapStateToProps, { updateProfile: profileAction })(MessageSet);
