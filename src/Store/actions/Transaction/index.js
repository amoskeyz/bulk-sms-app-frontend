import { axiosCall } from '../../../utils';

export const transactionPending = () => ({
  type: 'TRANSACTION_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const transactionSuccess = transactions => ({
  type: 'TRANSACTION_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    transactions,
    getDetails: false,
    // isAuthenticated: true,
  },
});
export const transactionError = error => ({
  type: 'TRANSACTION_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
    getDetails: false,
  },
});
export const cleanUpTransaction = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
    getDetails: true,
  },
});


export const transactionAction = () => async (dispatch) => {
//   await dispatch(sentPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/transaction', method: 'get' });
    console.log(result);

    // saveToLocalStorage(result.data);
    dispatch(transactionSuccess(result.data));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    console.log(response);
    if (!response) {
      dispatch(transactionError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    console.log(response, 'jlkjkjkjkjk');
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(transactionError(message));
  }
};
