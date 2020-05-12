import React from 'react';
import { getYear } from '../../utils';
import './Footer.scss';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <div className="footer flex-center">
    <div className="social-links-wrap flex-center">
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155962/fbIcon_i1ixml.svg"
        socialLink="https://www.facebook.com/kevo.ese"
      />
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155862/twitterIcon_gujcxw.svg"
        socialLink="https://twitter.com/itz_calvin"
      />
      <SocialLinks
        imgLink="../../assets/images/wats2.jpg"
        socialLink="https://wa.me/2347084324266?text=I%27m%20interested%20in%20your%20bulk%20sms%20service"
      />
      <SocialLinks
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572155862/linkedinIcon_l5hom6.svg"
        socialLink="https://www.linkedin.com/in/kelvin-esegbona-983b97110/"
      />
    </div>
    <hr/>
    <p>&copy; Bulk Sms App {getYear()}. All Right Reserved</p>
  </div>
);

export default Footer;
