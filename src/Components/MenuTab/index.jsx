import React from 'react';
// import { NavLink } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import Menu from './menu';
import './MenuTab.scss';

const MenuTab = ({ username }) => (
  <div className="menuTab mt-5">
    {/* {console.log(props, 'opopioiop[p[ll')} */}
    <div className="d-flex justify-content-center">
      <Menu id="bookmark" name="menuTabs" to={`/profile/${username}/message`}>
        <div className="menuIcon">
          <EmailIcon />
        </div>
        <span className="hidden md:block">Message Setting</span>
      </Menu>
      <Menu id="bookmark" name="menuTabs" to={`/profile/${username}/notification`}>
        <div className="menuIcon">
          <EmailIcon />
        </div>
        <span className="hidden md:block">Notification Setting</span>
      </Menu>
      <Menu id="bookmark" name="menuTabs" to={`/profile/${username}/edit`}>
        <div className="menuIcon">
          <EmailIcon />
        </div>
        <span className="hidden md:block">Edit Profile</span>
      </Menu>
    </div>
  </div>
);

export default MenuTab;
