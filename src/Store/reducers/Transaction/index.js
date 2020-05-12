const initState = {
  error: null,
  isLoading: false,
  //   showPassword: false,
  transactions: [],
  getDetails: true,
  //   isAuthenticated: false,
  isCompleted: false,
  //   isSubmit: false,
  //   isSettingAuth: true,
};
const transactionReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TRANSACTION_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'TRANSACTION_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'TRANSACTION_ERROR':
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

export default transactionReducer;
