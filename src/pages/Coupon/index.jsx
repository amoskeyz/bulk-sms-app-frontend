/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from '../../Components/FormGroup';
import Loader from '../../Components/Loader';
import { couponAction, cleanUpCoupon } from '../../Store/actions/Coupon';
import toast from '../../Components/Toast';

const Coupon = ({
  onCoupon,
  isCompleted,
  isLoading,
  details,
  error,
  cleanUp,
}) => {
  const [values, setValues] = useState({
    code: '',
  });

  const onChange = (e) => {
    e.persist();
    setValues(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const isConfirm = confirm('Please confirm message');
    onCoupon(values);
  };

  useEffect(() => {
    if (isCompleted) {
      toast(details, 'success');
      setValues({
        code: '',
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
      // Notify(error);
    }

    return () => {
      cleanUp();
    };
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
      <div className="mx-5 d-flex justify-content-center">
        <div className="w-50 mt-5 align-items-center">
          <Form onSubmit={onSubmit}>
            <FormGroup
              required
              label="Enter Coupon Code"
              classname="font-weight-bold"
              type="text"
              length="11"
              name="code"
              placeholder="Coupon Code"
              onChange={onChange}
              value={values.code}
            />
            <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
              {/* isLoading ? */}
              {' '}
              {isLoading ? (
                <Loader
                  size={8}
                  color="white
                  "
                />
              ) : 'Load Coupon'}
            </button>
          </Form>
        </div>
        {/* <button type="button" className="btn btn-primary">Send Now</button> */}
        {/* <Loader /> */}
      </div>
      <div>
        {/* <br /> */}
        {/* <hr /> */}
      </div>
      {/* </div> */}
    </>
  );
};

export const onCoupon = details => couponAction(details);
export const cleanUp = () => cleanUpCoupon();

const mapStateToProps = state => ({
  isCompleted: state.coupon.isCompleted,
  isLoading: state.coupon.isLoading,
  error: state.coupon.error,
  details: state.coupon.details,
});

export default connect(mapStateToProps, { onCoupon, cleanUp })(Coupon);
// export default Coupon;
