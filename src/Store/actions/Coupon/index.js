import { axiosCall } from '../../../utils';

export const couponPending = () => ({
  type: 'COUPON_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const couponSuccess = details => ({
  type: 'COUPON_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
    details,
  },
});
export const couponError = error => ({
  type: 'COUPON_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  },
});
export const cleanUpCoupon = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
  },
});


export const couponAction = values => async (dispatch) => {
  await dispatch(couponPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/coupon', payload: values, method: 'patch' });

    // saveToLocalStorage(result.data);
    dispatch(couponSuccess(result.data.message));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;

    if (!response) {
      dispatch(couponError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(couponError(message));
  }
};
