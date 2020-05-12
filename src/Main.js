import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import Store from './Store';
import { setDispatch } from './utils';

const Main = () => {
  setDispatch({ ...Store });
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default Main;
