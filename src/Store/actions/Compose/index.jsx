import { axiosCall } from '../../../utils';

export const messagePending = () => ({
  type: 'MESSAGE_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const messageSuccess = () => ({
  type: 'MESSAGE_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
  },
});
export const messageError = error => ({
  type: 'MESSAGE_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  },
});
export const cleanUpMessage = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
  },
});

export const savePhoneNumbers = phoneNumbers => ({
  type: 'SAVE_PHONE_NUMBERS',
  payload: { phoneNumbers },
});


export const messageAction = values => async (dispatch) => {
  await dispatch(messagePending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/message', payload: values, method: 'post' });
    console.log(result);

    // saveToLocalStorage(result.data);
    dispatch(messageSuccess(result.data));

    dispatch(cleanup());
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    console.log(response);
    if (!response) {
      dispatch(messageError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(messageError(message));
  }
};

export const csvFileAction = numbers => async (dispatch) => {
  dispatch(savePhoneNumbers(numbers));
};
