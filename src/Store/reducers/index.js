import { combineReducers } from 'redux';
import auth from './Auth';
import message from './Message';
import sent from './Sent';
import transaction from './Transaction';
import group from './Group';
import coupon from './Coupon';
import profile from './EditProfile';

const reducers = combineReducers({
  auth,
  message,
  sent,
  transaction,
  group,
  coupon,
  profile,
});

export default reducers;
