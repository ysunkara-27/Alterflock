import React from 'react';
import './Interest.css';

const Interest = () => {
  return (
    <div className="interest-container">
      <h1 className="interest-title">AlterFlock Interest Form</h1>
      <p>Please fill out the form if you would be interested in hearing more about AlterFlock as we continue to develop our platform and democratize real estate investing for everyone!</p>
      <p>Answering these questions will help us keep you in the loop!</p>
      <form action="https://getform.io/f/zbxdvxgb" method="POST" className="interest-form">
        <label htmlFor="name">Name *</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Email Address (For Updates) *</label>
        <input type="email" name="email" id="email" required />

        <label>How much would you be willing to invest *</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="investment-amount" value="less-than-100" required /> Less than $100
          </label>
          <label>
            <input type="radio" name="investment-amount" value="100-1000" /> $100-$1,000
          </label>
          <label>
            <input type="radio" name="investment-amount" value="1000-10000" /> $1,000-$10,000
          </label>
          <label>
            <input type="radio" name="investment-amount" value="more-than-10000" /> More than $10,000
          </label>
        </div>

        <label>What do you hope to get out of AlterFlock *</label>
        <select name="investment-goal" required>
          <option value="">Select...</option>
          <option value="quarterly-returns">Consistent Quarterly Returns</option>
          <option value="long-term-growth">Lump Sum Long Term Growth</option>
          <option value="portfolio-diversification">Portfolio Diversification</option>
          <option value="other">Other</option>
        </select>

        <label>Would you be willing to receive updates about AlterFlock to your provided Email Address? *</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="updates-consent" value="yes" required /> Yes
          </label>
          <label>
            <input type="radio" name="updates-consent" value="no" /> No
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Interest;
