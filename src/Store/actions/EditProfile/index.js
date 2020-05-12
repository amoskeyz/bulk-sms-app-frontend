/* eslint-disable no-unused-expressions */
import { axiosCall } from '../../../utils';

export const profilePending = () => ({
  type: 'PROFILE_PENDING',
  payload: {
    isCompleted: false,
    isLoading: true,
    error: null,
  },
});

export const profileSuccess = details => ({
  type: 'PROFILE_SUCCESS',
  payload: {
    isLoading: false,
    isCompleted: true,
    isAuthenticated: true,
    details,
  },
});
export const profileError = error => ({
  type: 'PROFILE_ERROR',
  payload: {
    error,
    isCompleted: false,
    isLoading: false,
  },
});
export const cleanUpProfile = () => ({
  type: 'CLEAN_UP',
  payload: {
    error: null,
    isCompleted: false,
    isLoading: false,
    pictureFile: null,
  },
});

export const saveProfileImage = pictureFile => ({
  type: 'SAVE_PROFILE_IMAGE',
  payload: { pictureFile },
});


export const profileAction = ({ values, pictureFile }) => async (dispatch) => {
  await dispatch(profilePending());

  const profileForm = new FormData();
  Object.keys(values).map(async (key) => {
    profileForm.append(key, values[key]);
  });

  pictureFile && profileForm.append('image', pictureFile, pictureFile.name);

  try {
    const result = await axiosCall({
      path: '/api/v1/user/edit',
      payload: profileForm,
      method: 'put',
      contentType: 'multipart/form-data',
    });

    dispatch(profileSuccess(result.data.message));
  } catch (error) {
    /* istanbul ignore next */
    const { response } = error;

    if (!response) {
      dispatch(profileError('Network Error. Please try again'));
      return;
    }
    /* istanbul ignore next */
    const message = response.data.error || response;
    /* istanbul ignore next */
    dispatch(profileError(message));
  }
};

export const setProfileImage = pictureFile => async (dispatch) => {
  dispatch(saveProfileImage(pictureFile));
};
