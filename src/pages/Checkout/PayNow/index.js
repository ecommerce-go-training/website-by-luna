import React, { useState } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import PaymentInput from 'components/Input/Payment';

import visa from 'assets/images/visa.png';
import vietcombank from 'assets/images/vietcombank.png';

import './style.scss';

const PaymentNow = () => {
  const [showMethodCOD, setShowMethodCOD] = useState(false);
  const [showMethodBanking, setShowMethodBanking] = useState(false);
  const [showMethodCredit, setShowMethodCredit] = useState(false);

  const handleShowMethodCOD = () => {
    setShowMethodCOD(true);
    setShowMethodBanking(false);
    setShowMethodCredit(false);
  };

  const handleShowMethodBanking = () => {
    setShowMethodCOD(false);
    setShowMethodBanking(true);
    setShowMethodCredit(false);
  };

  const handleShowMethodCredit = () => {
    setShowMethodCOD(false);
    setShowMethodBanking(false);
    setShowMethodCredit(true);
  };

  return (
    <div className='payment-now-container'>
      <Announce />
      <Header className='header white' />
      <div className='payment-now'>
        <div className='method-cash-of-delivery'>
          <div className='payment-method-point'>
            <div
              className='point-COD'
              onClick={handleShowMethodCOD}
              style={{ background: showMethodCOD === true ? 'black' : 'white' }}
            ></div>
            <p>Cash of Delivery (COD)</p>
          </div>
          {showMethodCOD && (
            <p className='method-cash-of-delivery__content'>
              By ticking, you agree to the following terms of sale. Items
              purchased during a promotional event or is a sale item can only be
              returned for a store credit or exchange. Click here to read full
              returns policy.{' '}
            </p>
          )}
        </div>
        <div className='method-banking'>
          <div className='payment-method-point'>
            <div
              className='point-banking'
              onClick={handleShowMethodBanking}
              style={{
                background: showMethodBanking === true ? 'black' : 'white'
              }}
            ></div>
            <p>Local ATM/ Internet Banking</p>
          </div>
          {showMethodBanking && (
            <div className='choose-bank'>
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
              <img src={vietcombank} alt='vietcombank logo' />
            </div>
          )}
        </div>
        <div className='method-credit'>
          <div className='method-credit-title'>
            <div className='payment-method-point'>
              <div
                className='point-credit'
                onClick={handleShowMethodCredit}
                style={{
                  background: showMethodCredit === true ? 'black' : 'white'
                }}
              ></div>
              <p>Credit card</p>
            </div>
            <img src={visa} alt='' />
          </div>
          {showMethodCredit && (
            <div className='input-payment-credit-cart'>
              <PaymentInput
                name='cartNumber'
                type='text'
                placeholder='Cart number'
                className=''
                errorMsg=''
                // register={register}
              ></PaymentInput>
              <PaymentInput
                name='nameOnCard'
                type='text'
                placeholder='Name on card'
                className=''
                errorMsg=''
                // register={register}
              ></PaymentInput>
              <div className='expiration-and-security-code'>
                <div className='expiration'>
                  <PaymentInput
                    name='expiration'
                    type='text'
                    placeholder='Expiration date (MM/YY)'
                    className=''
                    errorMsg=''
                    // register={register}
                  ></PaymentInput>
                </div>
                <div className='security-code'>
                  <PaymentInput
                    name='secCode'
                    type='text'
                    placeholder='Security code'
                    className=''
                    errorMsg=''
                    // register={register}
                  ></PaymentInput>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentNow;
