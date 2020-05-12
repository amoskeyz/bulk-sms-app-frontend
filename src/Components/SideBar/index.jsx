import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SmsIcon from '@material-ui/icons/Email';
import Schedule from '@material-ui/icons/Schedule';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PaymentIcon from '@material-ui/icons/Payment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import TelegramIcon from '@material-ui/icons/Telegram';
import SideItem from './SideItem';


const SideBar = ({ user }) => {
  const items1 = [
    {
      name: 'statements',
      label: 'Buy sms unit',
      // onClick,
      Icon: SmsIcon,
      items: [
        { name: 'message1', label: <Link to="/deposit" state="amos">Bank Deposit</Link>, Icon: AccountBalanceOutlinedIcon },
        { name: 'message2', label: <Link to="/deposit">Bank Transfer</Link>, Icon: AccountBalanceOutlinedIcon },
        { name: 'message3', label: <Link to="/deposit/online">Pay stack</Link>, Icon: PaymentIcon },
        { name: 'message4', label: <Link to="/deposit/online">Flutter wave</Link>, Icon: PaymentIcon }],
    },
    {
      name: 'coupon', label: <Link to="/coupon">Coupon</Link>, Icon: Schedule,
    },
  ];

  const items2 = [
    {
      name: 'compose', label: <Link to="/compose">Compose SMS</Link>, Icon: SmsIcon,
    },
    {
      name: 'schedule', label: <Link to="/compose/schedule">Schedule SMS</Link>, Icon: Schedule,
    },
  ];

  const items3 = [
    { name: 'message', label: <Link to="/report/delivery">Delivery Report</Link>, Icon: DoneAllIcon },
    {
      name: 'statements',
      label: 'Message History',
      Icon: TelegramIcon,
      items: [
        { name: 'messageSent', label: <Link to="/report/message">Sent Message</Link>, Icon: SmsIcon },
        { name: 'messageSchedule', label: <Link to="/report/message/schedule">Scheduled Message</Link>, Icon: Schedule }],
      // onClick,
    },
    {
      name: 'tansact', label: <Link to="/report/transactions">Transaction History</Link>, Icon: PaymentIcon,
    },
  ];

  const items4 = [
    {
      name: 'statements', label: <Link to="/create-group">Create Phone Group</Link>, Icon: GroupAddRoundedIcon,
    },
    {
      name: 'listGroup', label: <Link to="/list-group">List Phone Groups</Link>, Icon: FormatListNumberedRoundedIcon,
    },
  ];

  const items5 = [
    {
      name: 'insurance', label: <Link to="/dashboard">Dashboard</Link>, Icon: DashboardIcon,
    },
    {
      name: 'profile',
      label: ' My Profile',
      Icon: PersonOutlineOutlinedIcon,
      items: [
        { name: 'edit-profile', label: <Link to={`/profile/${user.username}/edit`}>Edit Profile</Link> },
        { name: 'notify', label: 'Notification' },
        { name: 'api', label: 'Api Setting' },
      ],
    },
    { name: 'logout', label: <Link to="/logout" state="logout">Log Out</Link>, Icon: PowerSettingsNewIcon },

  ];

  return (
    <div>
      <SideItem
        items1={items1}
        items2={items2}
        items3={items3}
        items4={items4}
        items5={items5}
        // user={user}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(SideBar);
