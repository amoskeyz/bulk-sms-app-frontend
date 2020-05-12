import React, { useState } from 'react';
// import HireMeIcon from '../../assets/HireMeIcon';
import './Navbar.scss';
import Hamburger from '../Hamburger';
import Dropdown from '../Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (state) => {
    setDropdown(state);
  };
  return (
    <div className="navbar-wrap">
      <div className="navbar">
        <button type="button">
          <span>BULK SMS APP</span>
          {/* <HireMeIcon /> */}
        </button>
        <div className="navbar__nav-links">
          <span>Pricing</span>
          <span>Developer</span>
          <span>Payment</span>
          <span>Call: 08098765434</span>
          {/* <span>Contact</span> */}
          <span className='log'>Login</span>
          <span className='log up'>Sign Up</span>
        </div>
        <Hamburger close={dropdown} handleDropdown={handleDropdown} />
      </div>
      <div className="dropdown-wrap">
        <Dropdown close={dropdown} />
      </div>
    </div>
  );
};

export default Navbar;
