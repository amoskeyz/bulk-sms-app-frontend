import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import combineReducers from './reducers';

// console.log(combineReducers)
const middlewares = applyMiddleware(thunk);

const Store = createStore(
  combineReducers,
  composeWithDevTools(middlewares),
);

export default Store;
