import React from 'react';
import './Hamburger.scss';

const Hamburger = ({ close, handleDropdown }) => (
  <div className="hamburger">
    <div
      onClick={() => handleDropdown(!close)}
      className={`hamburger-icon ${close ? 'cut-icon' : ''}`}
    >
      <div className="hamburger-icon__box hamburger-icon__box1">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box2">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box3">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
      <div className="hamburger-icon__box hamburger-icon__box4">
        <div className="hamburger-icon__box__first" />
        <div className="hamburger-icon__box__last" />
      </div>
    </div>
  </div>
);

export default Hamburger;
