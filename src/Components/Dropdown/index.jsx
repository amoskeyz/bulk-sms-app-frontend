import React from 'react';
import './Dropdown.scss';
import ListMenu from './ListMenu';

const Dropdown = ({ close }) => (
  <div className={`dropdown ${close ? 'dropdown__open' : ''}`}>
    <div className="dropdown__nav-arrow-wrap">
      <ListMenu text="Pricing" />
      <ListMenu text="SMS Api"/>
      <ListMenu text="Contact Us"/>
      <ListMenu text="Login"/>
    </div>
  </div>
);

export default Dropdown;
