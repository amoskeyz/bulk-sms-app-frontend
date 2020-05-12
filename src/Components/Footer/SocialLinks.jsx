import React from 'react';

const SocialLinks = ({ socialLink, imgLink }) => (
  <a className="social-link" href={socialLink}>
    <img src={imgLink} alt="" />
  </a>
);

export default SocialLinks;
