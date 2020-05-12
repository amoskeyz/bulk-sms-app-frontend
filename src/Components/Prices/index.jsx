import React from 'react';
import './Prices.scss';
import PricesImage from '../../assets/PricesImage';

const Prices = () => (
  <div className="iiii">
    {/* <div>jnksdfkshdfkk</div> */}
    <div className="Prices">
      <h4> Our Prices</h4>
      <div className="our">With our pricing system you get more SMS units the more you buy. There is no maximum limit to the amount of units you may purchase at any time.</div>
      <div className="Price__all">
        <div className="table">
          <table>
            <tbody>
              <tr>
                <th className="no">Number of Units</th>
                <th className="uniit">Unit Price</th>
                <th className="maax">Payment</th>
              </tr>
              <tr>
                <td className="no">500 to 9,999 Units</td>
                <td className="uniit">&#8358;1.50</td>
                <td className="maax">&#8358;500 - &#8358;9,999</td>
              </tr>
              <tr>
                <td className="no">10,000 to 999,999 Units</td>
                <td className="uniit">&#8358;1.20</td>
                <td className="maax">&#8358;500 - &#8358;9,999</td>
              </tr>
              <tr>
                <td className="no">1,000,000 to 9,999,999 Units</td>
                <td className="uniit">&#8358;1.00</td>
                <td className="maax">&#8358;500 - &#8358;9,999</td>
              </tr>
              <tr>
                <td className="no">10,000,000 to 99,999,999 Units</td>
                <td className="uniit">&#8358;0.90</td>
                <td className="maax">&#8358;500 - &#8358;9,999</td>
              </tr>
              <tr>
                <td className="no">100,000,000 to 999,999,999 Units</td>
                <td className="uniit">&#8358;0.90</td>
                <td className="maax">&#8358;500 - &#8358;9,999</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="Price__account"> */}
        <PricesImage />
        {/* </div> */}
      </div>
    </div>
  </div>
  // </ScrollAnimation>
);

export default Prices;
