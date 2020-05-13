/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CreateGroup.scss';
import FormGroup from '../../Components/FormGroup';
import Loader from '../../Components/Loader';
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import {
  groupAction,
  cleanUpGroup,
} from '../../Store/actions/CreateGroup';
import toast from '../../Components/Toast';
// import { colourOptions } from '../data';

const CreateGroup = ({
  onGroup,
  isLoading,
  error,
  isCompleted,
  cleanUp,
}) => {
  const [values, setValues] = useState({
    name: '',
    contacts: '',
  });

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isConfirm = confirm('Please confirm creating a new group');
    if (isConfirm) onGroup(values);
  };

  useEffect(() => {
    if (isCompleted) {
      toast('group created successfully', 'success');
      setValues({
        name: '',
        contacts: '',
      });
    }

    if (error) {
      if (error.data) {
        if (Array.isArray(error.data.error)) {
          for (let i = 0; i < error.data.error.length; i += 1) {
            toast(error.data.error[i], 'error');
          }
        } else toast(error.data.error, 'error');
      } else toast(error, 'error');
    }

    return (() => {
      cleanUp();
    });
  }, [isCompleted, error]);

  return (
    <>
      <div className="m-md-1 text-center">
        <Alert variant="danger" dismissible>
      Unverified Account. Please verify your email address or phone number
          {'  '}
          <Button variant="outline-danger">
            Verify Account
          </Button>
        </Alert>
        {/* <Alert variant="info" dismissible /> */}
      </div>
      {isLoading && !error && (
      <div className=" d-flex" style={{ height: '80vh' }}>
        <div className="text-center m-auto">
          <Loader color=" grey" size={10} />
          <div style={{
            fontFamily: 'Kaushan Script, cursive', fontSize: '20px', fontWeight: 'bold', opacity: 0.6,
          }}
          >
Creating Group...
          </div>
        </div>
      </div>
      )}

      {!isLoading && (
      <div className="mx-5 d-flex justify-content-center">
        <div className="w-75 mt-5 align-items-center">
          <Form onSubmit={onSubmit}>
            <FormGroup
              required
              label="Phone Group Name"
              classname="font-weight-bold"
              type="text"
              length="11"
              name="name"
              placeholder="Group Name"
              onChange={onChange}
              value={values.name}
            />
            <FormGroup
              required
              as="textarea"
              label="Numbers"
              classname="font-weight-bold"
              type="text"
              rows="8"
              name="contacts"
              placeholder="Seperate multiple numbers with comma ( , )"
              onChange={onChange}
              value={values.contacts}
            />
            <button type="submit" className="btn btn-primary w-100">Save Group</button>
          </Form>
        </div>
      </div>
      )}
    </>
  );
};


export const onGroup = details => groupAction(details);
export const cleanUp = () => cleanUpGroup();

const mapStateToProps = state => ({
  isCompleted: state.group.isCompleted,
  isLoading: state.group.isLoading,
  groups: state.group.groups,
  error: state.group.error,
});

export default connect(mapStateToProps, { onGroup, cleanUp })(CreateGroup);
