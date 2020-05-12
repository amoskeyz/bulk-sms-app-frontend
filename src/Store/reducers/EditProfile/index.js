const initState = {
  error: null,
  isLoading: false,
  pictureFile: null,
  isCompleted: false,
};
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PROFILE_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'SAVE_PROFILE_IMAGE':
      return {
        ...state,
        ...action.payload,
      };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'PROFILE_ERROR':
      return {
        ...state,
        ...action.payload,
      };
    case 'CLEAN_UP':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
