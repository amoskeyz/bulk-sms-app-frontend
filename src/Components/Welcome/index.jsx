import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import Dev from '../../assets/Dev';
import './Welcome.scss';
import Navbar from '../Navbar';

const Welcome = () => (
  <div className="wel">
    <Navbar />
    <div className="welcome">
      {/* <DeveloperSvg /> */}
      <div className="welcome__info">
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'Salsa', textAlign: 'center', fontWeight: 'bold', color: '#3F3D56',
          }}
          cursorColor="#3F3D56"
          text="Send Bulk SMS Online @ 90kobo"
          hideCursorAfterText
          typeSpeed={40}
        />
        <div className="gg">
          <div className="try">
Send Cheap Bulk SMS |
          Save Time, Save Money |
          Instant Message Delivery |
          90kobo per sms |
          Fast, Reliable and Secure,
          </div>
          {/* <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 'bold',
          fontSize: '1.8em',
          fontStyle: 'italic'
        }}
        startDelay={4000}
        cursorColor="#3F3D56"
        multiText={[
          'Send Cheap Bulk SMS',
          'Save Time, Save Money',
          'Instant Message Delivery',
          '90kobo per sms',
          'Fast, Reliable and Secure',
        ]}
        multiTextDelay={3000}
        typeSpeed={80}
      /> */}
        </div>
        <div className="ooo opp">
          <button type="button" style={{ background: 'blue', color: 'white' }}>Get Started</button>
          <button type="button" style={{ background: 'slateblue', color: 'white' }}>Free Trial</button>
        </div>
      </div>
      <Dev />
    </div>
  </div>
);

export default Welcome;
