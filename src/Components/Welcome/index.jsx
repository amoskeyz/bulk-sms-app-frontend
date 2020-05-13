import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import FacebookIcon from '@material-ui/icons/Facebook';
import Dev from '../../assets/Dev';
// import Facebook from '../../assets/facbook';
import './Welcome.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Welcome = () => (
  <div className="wel">
    <Navbar />
    <div className="welcome">
      {/* <DeveloperSvg /> */}
      <div className="welcome__info">
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'Varela', fontWeight: 'bold',
          }}
          cursorColor="#3F3D56"
          text="Make Your Business Communication Effective"
          hideCursorAfterText
          typeSpeed={40}
        />
        <div className="gg">
          <div className="try">
          Fast, Reliable and Secure...
          </div>
          {/* <TypeWriterEffect
            textStyle={{
              fontFamily: 'Kaushan Script',
              // fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 'bold',
              fontSize: '1.8em',
              fontStyle: 'italic',
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
          <button type="button" style={{ background: 'slateblue', color: 'white' }}>Get Started</button>
          {/* <button type="button" style={{ background: '#eee', color: '#445' }}>Free Trial</button> */}
        </div>
      </div>
      <Dev />
    </div>
    {/* <Footer /> */}
    <div className="fft">
      <span>
        <img src="http://res.cloudinary.com/amoslv/image/upload/v1589361667/%24Boy%20Creates%20Covid-19%20vaccine-type-news.png" alt="facebook" />
      </span>
      <span>
        <img src="http://res.cloudinary.com/amoslv/image/upload/v1589361724/Boy%20Creates%20Covid-19%20vaccine-type-news.png" alt="facebook" />
      </span>
      <span>
        <img src="http://res.cloudinary.com/amoslv/image/upload/v1589361726/Boy%20Creates%20Covid-19%20vaccine-type-news.png" alt="facebook" />
      </span>
      {/* <Facebook /> */}
      {/* <a href='Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>' /> */}
    </div>
  </div>
);

export default Welcome;
