const initState = {
  error: null,
  isLoading: false,
  details: '',
  //   showPassword: false,
  //   user: {},
  //   isAuthenticated: false,
  isCompleted: false,
  //   isSubmit: false,
  //   isSettingAuth: true,
};
const couponReducer = (state = initState, action) => {
  switch (action.type) {
    case 'COUPON_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'COUPON_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'COUPON_ERROR':
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

export default couponReducer;
