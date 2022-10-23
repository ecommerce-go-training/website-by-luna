import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Default';

import time from 'assets/images/icons/time.svg';
import cartItem1 from 'assets/images/cartItem1.png';
import Return from 'assets/images/icons/return.svg';
import checkSuccess from 'assets/images/checkSuccess.png';

import './style.scss';

const OrderHistory = () => {
  const [showDetailOrder, setShowDetailOrder] = useState(false);
  const [showMakeAReturn, setShowMakeAReturn] = useState(false);
  const [showSuccessRequest, setShowSuccessRequest] = useState(false);
  const handleShowDetailOrder = () => {
    setShowDetailOrder(!showDetailOrder);
  };
  return (
    <div className='history-container'>
      <Announce />
      <Header className='header white' />
      <div className='history'>
        <div className='history__page'>
          <p>
            <Link to='/' className='link__page active'>
              orders & returns
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page'>
              address book
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              newsletter
            </Link>
          </p>
          <p className='logout'>
            <Link to='/' className='link__page '>
              Log out
            </Link>
          </p>
          <div className='history__page--mobile'>
            <span className='active'>orders & return | </span>
            <span>address book | </span>
            <span>newsletter | </span>
            <span>log out</span>
          </div>
        </div>
        <div className='history__content'>
          {/* <div className='no-order'>
            <p className='show-order'>SHOW: ALL</p>
            <p className='show-order-noti'>You haven’t placed any order yet.</p>
          </div> */}
          <div className='order-info'>
            <div className='order-info__title'>
              <p className='order-title__code'>ORDER 000288153</p>
              <div
                className='order-info-back'
                onClick={() => setShowMakeAReturn(true)}
              >
                <img src={Return} alt='button return' />
                <p>MAKE A RETURN</p>
              </div>
            </div>
            <p className='order-status'>
              STATUS: <span>YOUR ORDER 000288153 IS BEING PROCESSED</span>
            </p>
            <div className='button-detail-track'>
              <div className='button-detail'>
                <DefaultButton onClick={handleShowDetailOrder}>
                  DETAILS
                </DefaultButton>
              </div>
            </div>
            {showDetailOrder && (
              <div className='order-history-detail'>
                <p>ARTICLES</p>
                <p className='policy-return-item'>
                  If your purchase isn’t quite right, you have 30 days to send
                  it back to us. Please contact our Customer Service for
                  assistance.
                </p>
                <div className='order-items'>
                  <div className='order-item'>
                    <div className='item-image-info'>
                      <img src={cartItem1} alt='item image' />
                      <div className='name-type-item'>
                        <p>Holly Sheer Blouse</p>
                        <p className='type-item'>Pink / S / Qty1</p>
                      </div>
                    </div>
                    <p className='item-price'>USD $250</p>
                  </div>
                  {/* ------- */}
                  <div className='order-item'>
                    <div className='item-image-info'>
                      <img src={cartItem1} alt='item image' />
                      <div className='name-type-item'>
                        <p>Holly Sheer Blouse</p>
                        <p className='type-item'>Pink / S / Qty1</p>
                      </div>
                    </div>
                    <p className='item-price'>USD $250</p>
                  </div>
                  {/* ------- */}
                  <div className='order-item'>
                    <div className='item-image-info'>
                      <img src={cartItem1} alt='item image' />
                      <div className='name-type-item'>
                        <p>Holly Sheer Blouse</p>
                        <p className='type-item'>Pink / S / Qty1</p>
                      </div>
                    </div>
                    <p className='item-price'>USD $250</p>
                  </div>
                </div>
                <div className='total-price-item'>
                  <div className='subtotal'>
                    <p>Subtotal</p>
                    <p>USD $250.00</p>
                  </div>
                  <div className='shipping-fee'>
                    <p>Shipping</p>
                    <p>USD $20.00</p>
                  </div>
                  <div className='total-item'>
                    <p>TOTAL</p>
                    <p>USD $270.00</p>
                  </div>
                </div>
                <div className='invoice-item-info'>
                  <div className='invoice-item-info__payment'>
                    <p className='invoice-item-info__payment--title'>
                      PAYMENT METHOD
                    </p>
                    <p className='invoice-item-info__payment--type'>PayPal</p>
                    <div className='info-address-billed'>
                      <p className='info-address-billed__to'>BILLED TO</p>
                      <p className='info-address-billed__user'>TINMAR POK</p>
                      <div className='address-user-billed'>
                        <p>18/10A Tang Bat Ho, Ward 11, District 1</p>
                        <p>Ho Chi Minh City, 700000</p>
                        <p>Vietnam</p>
                        <p>+84 969 00 96 18</p>
                      </div>
                    </div>
                  </div>
                  <div className='invoice-item-info__delivery'>
                    <p className='invoice-item-info__payment--title'>
                      DELIVERY METHOD
                    </p>
                    <p className='invoice-item-info__payment--type'>
                      DHL Express Service
                    </p>
                    <div className='info-address-shipper'>
                      <p className='info-address-shipper__to'>SHIPPED TO</p>
                      <p className='info-address-shipper__user'>TINMAR POK</p>
                      <div className='address-user-shipper'>
                        <p>18/10A Tang Bat Ho, Ward 11, District 1</p>
                        <p>Ho Chi Minh City, 700000</p>
                        <p>Vietnam</p>
                        <p>+84 969 00 96 18</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='button-invoice'>
                  <DefaultButton>PDF INVOICE</DefaultButton>
                </div>
              </div>
            )}
          </div>
          <div className='order-info'>
            <div className='order-info__title'>
              <p className='order-title__code'>ORDER 000288152</p>
              <div className='order-info-back'>
                <img src={Return} alt='button return' />
                <p>MAKE A RETURN</p>
              </div>
            </div>
            <p className='order-status'>
              STATUS:{' '}
              <span>YOUR ORDER 000288153 WAS BE SHIPPED ON JULY 20TH 2021</span>
            </p>
            <div className='button-detail-track'>
              <div className='button-track'>
                <DefaultButton>TRACK ORDER</DefaultButton>
              </div>
              <div className='button-detail'>
                <DefaultButton>DETAILS</DefaultButton>
              </div>
            </div>
          </div>
          <div className='order-info'>
            <div className='order-info__title'>
              <p className='order-title__code'>ORDER 000288151</p>
              <div className='order-info-back'>
                <img src={Return} alt='button return' />
                <p>MAKE A RETURN</p>
              </div>
            </div>
            <p className='order-status'>
              STATUS:{' '}
              <span>YOUR ORDER 000288153 WAS BE SHIPPED ON JULY 20TH 2021</span>
            </p>
            <div className='button-detail-track'>
              <div className='button-track'>
                <DefaultButton>TRACK ORDER</DefaultButton>
              </div>
              <div className='button-detail'>
                <DefaultButton>DETAILS</DefaultButton>
              </div>
            </div>
          </div>
          {showMakeAReturn && (
            <div
              className='make-return'
              onClick={() => setShowMakeAReturn(false)}
            >
              <div className='back-drop'></div>
              <div className='popup-make-a-return'>
                <img
                  src={time}
                  alt='icon exit'
                  onClick={() => setShowMakeAReturn(false)}
                />
                <p className='popup-title'>MAKE A RETURN</p>
                <p className='require-fill'>
                  Please enter your order details to begin
                </p>
                <form className='input-make-a-return'>
                  <DefaultInput
                    name='orderNumber'
                    type='text'
                    placeholder='Order number ( number only, do not include #)'
                    className=''
                  />
                  <DefaultInput
                    name='email'
                    type='text'
                    placeholder='Email'
                    className=''
                  />
                  <DefaultInput
                    name='season'
                    type='text'
                    placeholder='Reason for return'
                    className=''
                  />
                  <DefaultInput
                    name='link'
                    type='text'
                    placeholder='Link'
                    className=''
                  />
                  <p>
                    Please paste the download link of photos and a short video
                    demonstrating the damage or fault with your product.
                  </p>
                  <div className='button-start-return'>
                    <DefaultButton
                      className='button-start--return'
                      onClick={() => setShowSuccessRequest(true)}
                    >
                      START MY RETURN
                    </DefaultButton>
                  </div>
                </form>
              </div>
            </div>
          )}
          {showSuccessRequest && (
            <div
              className='request-submitted'
              onClick={() => setShowSuccessRequest(false)}
            >
              <div className='back-drop'></div>
              <div className='popup-request-submitted'>
                <p className='exit-popup'>Close</p>
                <p onClick={() => setShowSuccessRequest(false)} />
                <div className='request-content'>
                  <img src={checkSuccess} alt='check success' />
                  <p className='popup-title'>REQUEST SUBMITTED !</p>
                  <p className='request-policy'>
                    Our Customer Service will get back to you within 1-3
                    business days via email.
                  </p>
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

export default OrderHistory;
