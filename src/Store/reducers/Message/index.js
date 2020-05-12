const initState = {
  error: null,
  isLoading: false,
  phoneNumbers: null,
  isCompleted: false,
};
const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'MESSAGE_PENDING':
      return {
        ...state,
        ...action.payload,
      };
    case 'MESSAGE_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
    case 'MESSAGE_ERROR':
      return {
        ...state,
        ...action.payload,
      };
    case 'SAVE_PHONE_NUMBERS':
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

export default messageReducer;
