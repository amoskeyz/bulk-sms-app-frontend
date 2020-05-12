import { axiosCall } from '../../../utils';

export const sentPending = () => ({
  type: 'SENT_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
    isDelete: false,
    // getDetails: true,
  },
});

export const deleteSuccess = () => ({
  type: 'DELETE_MESSAGE',
  payload: {
    isDelete: true,
    isLoading: false,
    error: null,
    // getDetails: true,
  },
});

export const sentSuccess = sentMessage => ({
  type: 'SENT_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    sentMessage,
    getDetails: false,
    isDelete: false,
    // isAuthenticated: true,
  },
});
export const sentError = error => ({
  type: 'SENT_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
    getDetails: false,
    isDelete: false,
  },
});
export const cleanUPSent = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
    getDetails: true,
    isDelete: false,
  },
});


export const sentAction = () => async (dispatch) => {
//   await dispatch(sentPending());
  // console.log(dispatch)
  try {
    const result = await axiosCall({ path: '/api/v1/message', method: 'get' });
    console.log(result);

    // saveToLocalStorage(result.data);
    dispatch(sentSuccess(result.data));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    console.log(response);
    if (!response) {
      dispatch(sentError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    console.log(response, 'jlkjkjkjkjk');
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(sentError(message));
  }
};

export const deleteAction = messageId => async (dispatch) => {
  // await dispatch(sentPending());
  console.log('i am here', messageId);
  try {
    await axiosCall({ path: `/api/v1/message/${messageId}`, method: 'delete' });

    // saveToLocalStorage(result.data);
    // return
    console.log(dispatch(deleteSuccess()));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;
    console.log(response);
    if (!response) {
      dispatch(sentError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(sentError(message));
  }
};
