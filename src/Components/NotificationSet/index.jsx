import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import FormGroup from '../FormGroup';
import { profileAction } from '../../Store/actions/EditProfile';
import Loader from '../Loader';


const NotificationSet = ({
  user, updateProfile, pictureFile, isLoading,
}) => {
  const [values, setValues] = useState({
    inAppNotification: user.inAppNotification,
    emailNotification: user.emailNotification,
  });

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));
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
        <h5>Edit Notification Setting</h5>
        <div className="w-100">
          <Form className="w-50 mt-4" onSubmit={onSubmit}>
            <Form.Check
              name="inAppNotification"
              className="mb-3 op"
              type="switch"
              id="custom-switch2"
              label="In-App Notification"
              checked={values.inAppNotification}
              onChange={onChange}
            />

            <Form.Check
            // as="h6"
              name="emailNotification"
              className="mb-3 op"
              type="switch"
              id="custom-switch3"
              label="Email Notification"
              checked={values.emailNotification}
              onChange={onChange}
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

export default connect(mapStateToProps, { updateProfile: profileAction })(NotificationSet);
