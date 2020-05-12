const initState = {
  error: null,
  isLoading: false,
  isDelete: false,
  //   showPassword: false,
  sentMessage: [],
  getDetails: true,
  //   isAuthenticated: false,
  isCompleted: false,
  //   isSubmit: false,
  //   isSettingAuth: true,
};
const sentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SENT_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'DELETE_MESSAGE':
      return {
        ...state,
        ...action.payload,
      };
    case 'SENT_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'SENT_ERROR':
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

export default sentReducer;
