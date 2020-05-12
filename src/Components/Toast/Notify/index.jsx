/* eslint-disable react/no-string-refs */
import React, { useRef } from 'react';
import NotificationAlert from 'react-notification-alert';
import 'react-notification-alert/dist/animate.css';

// class Notify extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: true,
//     };
//     // this.onDismiss = this.onDismiss.bind(this);
//     this.notify = this.notify.bind(this);
//   }

//   notify(place, color, message) {
//     let type;
//     switch (color) {
//       case 'primary':
//         type = 'primary';
//         break;
//       case 'success':
//         type = 'success';
//         break;
//       case 'error':
//         type = 'danger';
//         break;
//       case 'warn':
//         type = 'warning';
//         break;
//       case 'information':
//         type = 'info';
//         break;
//       default:
//         break;
//     }
//     let options = {};
//     options = {
//       place,
//       message: (
//         <div>
//           <div>
//             Welcome to
//             {' '}
//             <b>Now UI Dashboard React</b>
//             {' '}
// - a beautiful freebie for
//             every web developer.
//           </div>
//         </div>
//       ),
//       type,
//       icon: 'now-ui-icons ui-1_bell-53',
//       autoDismiss: 7,
//     };
//     console.log(this);
//     this.refs.notificationAlert.notificationAlert(options);
//   }

//   render() {
//     return (
//       <>
//         <NotificationAlert ref="notificationAlert" />
//         {' '}
//         {() => { this.notify('tr', 'success', 'Testing'); }}
//       </>
//     );
//   }
// }

const Notify = () => {
  const isRef = useRef(null);

  const notify = (place, color, message) => {
    let type;
    switch (color) {
      case 'primary':
        type = 'primary';
        break;
      case 'success':
        type = 'success';
        break;
      case 'error':
        type = 'danger';
        break;
      case 'warn':
        type = 'warning';
        break;
      case 'information':
        type = 'info';
        break;
      default:
        break;
    }
    let options = {};
    options = {
      place,
      message: (
        <div>
          <div>
            Welcome to
            {' '}
            <b>Now UI Dashboard React</b>
            {' '}
- a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type,
      icon: 'now-ui-icons ui-1_bell-53',
      autoDismiss: 7,
    };
    console.log(isRef);
    isRef.notificationAlert(options);
  };

  return (
    <>
      <NotificationAlert ref={isRef} />
      {' '}
      {() => { notify('tr', 'success', 'Testing'); }}
    </>
  );
};

export default Notify;
