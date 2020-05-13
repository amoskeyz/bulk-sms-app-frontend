// eslint-disable-next-line import/no-cycle
import { axiosCall, saveToLocalStorage } from '../../../utils';

export const signUpPending = () => ({
  type: 'SIGNUP',
  payload: {
    isLoading: true,
    isCompleted: false,
    error: null,
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

export const signUpError = error => ({
  type: 'SIGNUP_ERROR',
  payload: {
    error,
    isLoading: false,
    isCompleted: false,
  },
});

export const signUpSuccess = user => ({
  type: 'SIGNUP_SUCCESS',
  payload: {
    error: null,
    user,
    isLoading: false,
    isCompleted: true,
  },
});

export const setUpUser = payload => ({
  type: 'SETUP_USER',
  payload,
});

export const signUpAction = values => async (dispatch) => {
  dispatch(cleanUpAuth());
  dispatch(signUpPending());

  const details = { ...values };

  delete details.confirmPassword;

  try {
    const result = await axiosCall({ path: '/api/v1/user/signup', payload: details, method: 'post' });
    saveToLocalStorage(result.data);
    dispatch(signUpSuccess(result.data));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    if (!response) {
      dispatch(signUpError('Network error Try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.message || response;
    /* istanbul ignore next */
    dispatch(signUpError(message));
  }
};

export const getUser = () => async (dispatch) => {
  /* istanbul ignore next */
  // if (localStorage.token && localStorage.user) {
  dispatch(signUpPending());
  try {
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    // console.log(user, '=======>userrrrrrr');
    if (user) {
      const result = await axiosCall({
        method: 'post',
        path: '/api/v1/user/',
        payload: { email: user.email },
      });
      // console.log(result, '=====================> result');
      if (result) {
        const payload = {
          error: null,
          user: result.data,
          isAuthenticated: true,
          isLoading: false,
        };

        // console.log(payload);
        dispatch(setUpUser(payload));
      }
    } else {
      // eslint-disable-next-line no-throw-literal
      throw ('You are Logged out. Kindly Login to continue');
    }
  } catch (error) {
    // console.log(error.response, error, '-------------------> response');
    const payload = {
      error,
      user: {},
      isAuthenticated: false,
      isLoading: false,
    };
    dispatch(setUpUser(payload));
  }
  // }
};
