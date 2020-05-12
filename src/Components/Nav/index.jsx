import React, { useState } from 'react';
// import HireMeIcon from '../../assets/HireMeIcon';
import './Nav.scss';
import Slide from 'react-reveal/Slide';
import Hamburger from '../Hamburger';
import Dropdown from '../Dropdown';

const Nav = ({ scroll }) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (state) => {
    setDropdown(state);
  };
  console.log(scroll);
  return (
    <div>
      { scroll <= 699 ? ''
        : scroll && (
        <Slide top>
          <div className="navbar-wrap1">
            <div className="navbar1">
              <button type="button">
                <span>BULK SMS APP</span>
                {/* <HireMeIcon /> */}
              </button>
              <div className="navbar1__nav-links1">
                <span>Pricing</span>
                <span>Developer</span>
                <span>Payment</span>
                <span>Call: 08098765434</span>
                {/* <span>Contact</span> */}
                <span className="log1">Login</span>
                <span className="log up1">Sign Up</span>
              </div>
              <Hamburger close={dropdown} handleDropdown={handleDropdown} />
            </div>
            <div className="dropdown-wrap1">
              <Dropdown close={dropdown} />
            </div>
            <hr />
          </div>
          <hr />
        </Slide>
        )}
    </div>
  );
};

export default Nav;
