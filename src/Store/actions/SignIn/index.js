import { axiosCall, saveToLocalStorage } from '../../../utils';

export const signInPending = () => ({
  type: 'SIGNIN_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const signInEmail = () => ({
  type: 'SIGNIN_EMAIL',
  payload: {
    isCompleted: false,
    isLoading: false,
    error: null,
    showPassword: true,
  },
});

export const signInSuccess = user => ({
  type: 'SIGNIN_SUCCESS',
  payload: {
    isLoading: true,
    user,
    isCompleted: true,
    isAuthenticated: true,
  },
});
export const signInError = error => ({
  type: 'SIGNIN_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  },
});
export const cleanUpAuth = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
  },
});


export const signInAction = values => async (dispatch) => {
  await dispatch(signInPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/user/login', payload: values, method: 'post' });

    saveToLocalStorage(result.data);
    dispatch(signInSuccess(result.data));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    if (!response) {
      dispatch(signInError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(signInError(message));
  }
};

export const getUserAction = value => async (dispatch) => {
  await dispatch(signInPending());
  try {
    await axiosCall({ path: '/api/v1/user/email', payload: { email: value }, method: 'post' });

    dispatch(signInEmail());
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    if (!response) {
      dispatch(signInError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(signInError(message));
  }
};
