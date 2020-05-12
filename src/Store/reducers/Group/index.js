const initState = {
  error: null,
  isLoading: false,
  //   showPassword: false,
  groups: [],
  //   isAuthenticated: false,
  isCompleted: false,
  //   isSubmit: false,
  //   isSettingAuth: true,
};
const groupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GROUP_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'GROUP_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'GROUP_ERROR':
      return {
        ...state,
        ...action.payload,
      };
    case 'LIST_GROUP_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'LIST_GROUP_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'LIST_GROUP_ERROR':
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

export default groupReducer;
