import React from 'react'
import AccountImage from '../../assets/AccountImage'
import Slide from 'react-reveal/Slide';

const Account = () => {
return(
    <div>
      <div className="Price__all ui">
        {/* <Slide left> */}
        <AccountImage />
        {/* </Slide> */}
        <Slide right>
        <div className="Price__account">
          <h5>Bank Deposit Accounts</h5>
          <p> Make bank deposits, online transfers, or ATM transfers to any of our bank accounts listed below.</p>
          <div className="banks">
            <div className="account">
              <img src = '../../assets/images/gtb.jpg' alt = 'account' />
              <div className="hj">
                <span>Garranty Trust bank</span>
                <div><span>Account Name:</span> Amos Oruaroghene</div>
                <div><span>Account Number:</span> 09874875</div>
              </div>
            </div>
            <div className="account">
              <img src = '../../assets/images/gtb.jpg' alt = 'account' />
              <div className="hj">
                <span>Garranty Trust bank</span>
                <div><span>Account Name:</span> Amos Oruaroghene</div>
                <div><span>Account Number:</span> 09874875</div>
              </div>
            </div>
          </div>
        </div>
        </Slide>
      </div>
    </div>
)
}

export default Account;
