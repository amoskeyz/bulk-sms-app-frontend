import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from '../FormGroup';
import './MessageSet.scss';
import { profileAction } from '../../Store/actions/EditProfile';
import Loader from '../Loader';

const MessageSet = ({
  user, updateProfile, pictureFile, isLoading,
}) => {
  const [values, setValues] = useState({
    senderId: user.senderId || '',
    reminder: user.reminder,
    delivery: user.delivery,
  });

  const onChange = (e) => {
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

  const handleChecked = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.checked }));
  };
  return (
    <div className="mess mt-3 d-flex jutify-content-center">
      <div className="m-auto w-75">
        <h5>Edit Message Setting</h5>
        <div className="w-100">
          <Form className="w-50 mt-4" onSubmit={onSubmit}>
            <FormGroup
              name="senderId"
              label=" Default Sender ID"
              classname="font-weight-bold w-50"
              type="text"
              length="11"
              placeholder="Sender name"
              value={values.senderId}
              onChange={onChange}
            />
            <Form.Check
              name="delivery"
              className="mb-3 op"
              type="switch"
              id="custom-switch"
              label="Send Delivery Report to Mail"
              checked={values.delivery}
              onChange={handleChecked}
            />

            <Form.Check
            // as="h6"
              name="reminder"
              className="mb-3 op"
              type="switch"
              id="custom-switch1"
              label="Low Sms Unit Email Reminder"
              checked={values.reminder}
              onChange={handleChecked}
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
