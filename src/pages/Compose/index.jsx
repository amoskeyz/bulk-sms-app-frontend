/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import './Compose.scss';
import FormGroup from '../../Components/FormGroup';
import Verify from '../../Components/Verify';
import Unit from '../../Components/Unit';
import Options from '../../Components/Options';
import Dialog from '../../Components/Dialog';
import Datepicker from '../../Components/Datepicker';
import {
  messageAction,
  cleanUpMessage,
} from '../../Store/actions/Compose';
import toast from '../../Components/Toast';
import Loader from '../../Components/Loader';
import notify from '../../Components/Toast/Notify';

const Compose = (props) => {
  const { onMessage, isLoading, phoneNumbers } = props;
  const [values, setValues] = useState({
    to: '',
    from: props.user.senderId || '',
    text: '',
  });
  console.log(phoneNumbers, '....phone');
  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  // ifNumbers;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumbers) {
      setValues(prevState => ({ ...prevState, to: `${prevState.to},${phoneNumbers}` }));
    }
    const isConfirm = confirm('Please confirm message');
    // console

    if (isConfirm) onMessage({ ...values, to: `${values.to},${phoneNumbers}` });
  };

  useEffect(() => {
    if (props.isCompleted) {
      toast('Message Sent', 'success');
      setValues({
        to: '',
        from: props.user.senderId || '',
        text: '',
      });
    }

    if (props.error) {
      if (props.error.data) {
        if (Array.isArray(props.error.data.error)) {
          for (let i = 0; i < props.error.data.error.length; i += 1) {
            toast(props.error.data.error[i], 'error');
          }
        } else toast(props.error.data.error, 'error');
      } else toast(props.error, 'error');
      // Notify();
    }

    return () => {
      props.cleanUp();
    };
  }, [props.isCompleted, props.error]);

  // notify();
  return (
    <>
      <Verify />
      {/* <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} /> */}
      {/* {Notify('Message Sent')} */}
      {/* {isLoading && !props.error && (
      <div className=" d-flex" style={{ height: '80vh' }}>
        <div className="text-center m-auto">
          <Loader color=" grey" size={10} />
          <div style={{
            fontFamily: 'Kaushan Script, cursive', fontSize: '15px', fontWeight: 'bold', opacity: 0.6,
          }}
          >
Sending...
          </div>
        </div>
      </div>
      )} */}
      {/* {!isLoading */}
      {/* && ( */}
      <div className="mx-5 d-flex justify-content-between">
        <div className="w-50">
          {/* { notify()} */}
          <Unit {...props} />
          <Form onSubmit={onSubmit}>
            <FormGroup
              required
              label="Sender ID"
              classname="font-weight-bold"
              type="text"
              length="11"
              name="from"
              placeholder="Sender name"
              onChange={onChange}
              value={values.from}
            />
            <FormGroup
              label="Destination Numbers"
              classname="font-weight-bold"
              as="textarea"
              name="to"
              placeholder="Seperate multiple numbers with comma"
              rows="4"
              onChange={onChange}
              value={values.to}
            />
            <FormGroup
              required
              label="Compose Message"
              classname="font-weight-bold"
              as="textarea"
              rows="6"
              name="text"
              onChange={onChange}
              value={values.text}
            />
            {values.text.length > 0 ? (
              <div className="page">
                <p>
                  <strong>Page:</strong>
                  {' '}
                  {Math.floor(values.text.length / 161) + 1}
                </p>
                <p>
                  <strong>Character left:</strong>
                  {' '}
                  {(Math.floor(values.text.length / 161) + 1) * 160 - values.text.length}
                </p>
                <p>
                  <strong>Total typed characters:</strong>
                  {' '}
                  {values.text.length}
                </p>
              </div>
            ) : ''}
            { props.location.pathname === '/compose/schedule' ? (
              <div className="buut">
                <strong>Select Date: </strong>
                <Datepicker />
                <Dialog text="Send Message" type="outline" group="Schedule message" details={`Message will be sent on ${new Date()}`} />
                {/* <button disabled type="button" className="btn btn-primary">Send Message</button> */}
                {/* <button disabled type="button" className="btn btn-outline-primary">Use free sms unit</button> */}
              </div>
            )
              : (
                <div className="buut mt-2">
                  {/* <Dialog text="Confirm Message" tpye="submit" variant="primary" group="Schedule message" details="confim message" /> */}
                  <button type="submit" disabled={isLoading} className="btn btn-primary w-50">
                    {isLoading ? (
                      <Loader
                        size={10}
                        color="white
                  "
                      />
                    ) : 'Send Now'}

                  </button>
                  <button type="button" className="btn btn-outline-primary">Use free sms unit</button>
                </div>
              )
}
          </Form>
        </div>
        <Options {...props} />
      </div>
      )
      {/* } */}
      {/* </div> */}
    </>
  );
};

export const onMessage = details => messageAction(details);
export const cleanUp = () => cleanUpMessage();

const mapStateToProps = state => ({
  user: state.auth.user,
  isCompleted: state.message.isCompleted,
  isLoading: state.message.isLoading,
  error: state.message.error,
  phoneNumbers: state.message.phoneNumbers,
});

export default connect(mapStateToProps, { onMessage, cleanUp })(Compose);
