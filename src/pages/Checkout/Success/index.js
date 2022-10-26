import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import check from 'assets/images/checkCircle.svg';

import './style.scss';

const PaySuccess = () => {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='payment-success'>
        <img src={check} alt='checkCircle success icon' />
        <p>THANK YOU! </p>
        <p>Your order is completed.</p>
        <p className='confirm-send-mail'>
          We send an email to confirm your order details.
        </p>
        <p className='order-code'>
          YOUR ORDER NUMBER <span>#12332</span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PaySuccess;
