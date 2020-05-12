import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = ({ children, to }) => (
  <div className="menu mx-5 h-12 d-flex position-relative flex-grow w-1/6 max-w-42 bg-white">
    <NavLink
      className="d-flex w-100 text-gray-250 border-solid border-b-2 border-transparent text-center flext text-sm align-items-center justify-content-center"
      to={to}
    >
      {children}
    </NavLink>
  </div>
);

export default menu;
