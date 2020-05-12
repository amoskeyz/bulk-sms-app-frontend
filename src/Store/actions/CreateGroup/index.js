import { axiosCall } from '../../../utils';

export const groupPending = () => ({
  type: 'GROUP_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const groupSuccess = () => ({
  type: 'GROUP_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    // isAuthenticated: true,
  },
});
export const groupError = error => ({
  type: 'GROUP_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  },
});
export const cleanUpGroup = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
  },
});


export const groupAction = values => async (dispatch) => {
  await dispatch(groupPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/user/phoneBook', payload: values, method: 'post' });
    console.log(result);

    // saveToLocalStorage(result.data);
    dispatch(groupSuccess(result.data));
  } catch (error) {
    // console.log(error, error.response, 'ioioioio');
    /* istanbul ignore next */
    const { response } = error;
    // console.log(response);
    if (!response) {
      dispatch(groupError('Network Error. Please try again'));
      return;
    }
    console.log(response.data.error, response);
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(groupError(message));
  }
};
