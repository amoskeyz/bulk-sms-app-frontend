import { axiosCall } from '../../../utils';

export const groupPending = () => ({
  type: 'LIST_GROUP_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const groupSuccess = groups => ({
  type: 'LIST_GROUP_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    groups,
    // isAuthenticated: true,
  },
});
export const groupError = error => ({
  type: 'LIST_GROUP_ERROR',
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


export const groupAction = () => async (dispatch) => {
  await dispatch(groupPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/user/phoneBook', method: 'get' });
    console.log(result.data, '========res');

    // saveToLocalStorage(result.data);
    dispatch(groupSuccess(result.data));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    // console.log(response);
    if (!response) {
      dispatch(groupError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(groupError(message));
  }
};
