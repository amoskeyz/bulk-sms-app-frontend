import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './MainNav.scss';
import Slide from 'react-reveal/Slide';
import { getUser } from '../../Store/actions/SignUp';

const MainNav = ({
  wallet, username, image, userDetails, isCompleted, coupon,
}) => {
  useEffect(() => {
    if (isCompleted || coupon) userDetails();
  }, [isCompleted, coupon]);

  return (
    <Slide top>
      <div className="navbar-wrap2">
        <div className="nava">
          <div className="cn">
            <div className="notify"><NotificationsNoneIcon /></div>
            <div className="credit">
              wallet: &#8358;
              {' '}
              {Number(wallet).toFixed(2)}
            </div>
            <div className="username">{username}</div>
          </div>
          <div className="image"><img src={image || '../../assets/dummy.png'} alt="user" /></div>
        </div>
      </div>
    </Slide>
  );
};

export const userDetails = () => getUser();

const mapStateToProps = state => ({
  isCompleted: state.message.isCompleted,
  coupon: state.coupon.isCompleted,
});

export default connect(mapStateToProps, { userDetails })(MainNav);
