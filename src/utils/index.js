// import React from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import toast from '../Components/Toast';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../Store/actions/SignUp';

let callDispatch;
export const setDispatch = ({ dispatch }) => {
  callDispatch = dispatch;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};


export const axiosCall = async ({
  path, payload, method, contentType,
}) => {
  const url = `https://bulk-sms-app-backend.herokuapp.com/${path}`;
  const headers = {
    // 'Access-Control-Allow-Origin': '*',
    'x-access-token': localStorage.token,
    'Content-Type': contentType || 'application/json',
  };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true,
  };

  try {
    const result = await axios(axiosdata);
    // console.log(result, 'tytytytytyytyty');
    const data = result && result.data;

    return data;
  } catch (error) {
    const { response } = error;
    console.log(error);
    // console.log(response, error, 'erererere');
    if (response) {
      if (response.status === (401) || response.status === (403)) {
        clearLocalStorage();
        // toast('Kindly login', 'error');
        // <Redirect to="/signin" />;
        callDispatch(getUser());
        // windows.location('localhost/signin');
        return response;
      }
    }
    throw error;
  }
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const token = user.token || localStorage.getItem('token');
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    token ? localStorage.setItem('isAuthenticated', true) : '';
  }
};


// eslint-disable-next-line import/prefer-default-export
export const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};
