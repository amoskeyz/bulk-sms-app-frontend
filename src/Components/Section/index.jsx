import React from 'react'

import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './Section.scss'

const Section = ({ scroll }) => {
    return(
        <div className='section'>
            {console.log(scroll)}
            <div className="sc">
            <div className="cardd o1">
            <img src = '../../assets/text-latency.svg'/>
        <h6>Instant Delivery</h6>
    <p>Through our adaptive SMS routing technology, we are able to deliver 99.99% text messages to final mobile end point in less than 1 second. Texting using SENDaTEXT is more efficient than sending text via mobile phone.</p>
            </div>
            <div className="cardd o2">
            <img src = '../../assets/text-deliver.svg'/>
    <h6>Reliable Delivery</h6>
    <p>Normally, most online vendors will send your text message or SMS via unreliable network hops or shady "grey networks". We ensure secure & reliable text message delivery through our encrypted communication networks.</p>
            </div>
            <div className="cardd o3">
            <img src = '../../assets/text-free.svg'/>
    <h6>Zero Cost</h6>
    <p>By using SENDaTEXT, you get instant and reliable delivery of your SMS via our secure and private network for 100% free. There is absolutely no cost to you as an anonymous sender to use our services. Enjoy free texting!</p>
    
            </div>
            </div>
  <div className={scroll > 510? 'lorem opp' : 'lorem'}>
      {/* <AnimatedOnScroll animationIn="bounceInLeft" animationOut="fadeOut"> */}
      <h6>Send Bulk SMS to any Network in Nigeria at one unit per SMS.</h6>
      <p>Bulk Sms App provides the smartest, fastest and most reliable means of sending text messages in Nigeria and across Africa; reaching thousands of people with just one click with instant delivery report.</p>
      {/* </div> */}
      {/* </AnimatedOnScroll> */}
      </div>
  </div>
    )
}

export default Section;
