import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DefaultButton from 'components/Button';
import DefaultCheckbox from 'components/Checkbox';
import PaymentInput from 'components/Input/Payment';

import visa from 'assets/images/visa.png';
import logo from 'assets/images/logo.jpg';
import paypal from 'assets/images/paypal.png';
import mail from 'assets/images/icons/mail.svg';
import phone from 'assets/images/icons/phone.svg';
import cartItem1 from 'assets/images/cartItem1.png';
import back from 'assets/images/icons/arrowBack.svg';
import cartIcon from 'assets/images/icons/cartIcon.svg';
import arrowDown from 'assets/images/icons/arrowDown.svg';
import paypalRedirect from 'assets/images/paypalRedirect.png';

import './style.scss';

const Payment = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Footer'
  });

  const [showCreditMethod, setShowCreditMethod] = useState(true);
  const [showPaypalMethod, setShowPaypalMethod] = useState(false);

  const [showSameAddress, setShowSameAddress] = useState(true);
  const [showDifferentAddress, setShowDifferentAddress] = useState(false);

  const handleShowCredit = () => {
    setShowCreditMethod(true);
    setShowPaypalMethod(false);
  };

  const handleShowPaypal = () => {
    setShowCreditMethod(false);
    setShowPaypalMethod(true);
  };

  const handleShowSameAddress = () => {
    setShowSameAddress(true);
    setShowDifferentAddress(false);
  };

  const handleShowDifferentAddress = () => {
    setShowSameAddress(false);
    setShowDifferentAddress(true);
  };

  const navigate = useNavigate();
  const redirectHome = () => {
    return navigate('/');
  };

  const redirectPaynow = () => {
    return navigate('/pay-now');
  };

  const redirectBack = () => {
    return navigate('/ship-payment');
  };

  return (
    <div className='payment-container'>
      <div className='payment '>
        <div className='payment__info'>
          <div className='payment__info--content'>
            <img
              className='logo-payment-page'
              src={logo}
              alt='logo'
              onClick={redirectHome}
            />
            <div className='summary-mobile'>
              <div className='cart-and-content'>
                <img src={cartIcon} alt='icon cart' />
                <p>Show order summary</p>
                <img src={arrowDown} alt='icon arrow down' />
              </div>
              <p>USD $250</p>
            </div>
            <p className='checkout-direction'>
              <span className='active'>BAG /</span>{' '}
              <span className='active'>INFORMATION / </span>
              <span className='active'> SHIPPING / </span>
              <span>PAYMENT</span>{' '}
            </p>
            <div className='payment__info-contact-address'>
              <div className='payment__info-contact'>
                <div className='payment__info-contact-content'>
                  <p className='title-user'>Contact </p>
                  <p>tinmar09poke@gmail.com</p>
                </div>
                <p className='change-info'>Change</p>
              </div>
              <div className='payment__info-address'>
                <div className='payment__info-address-content'>
                  <p className='title-type'>Ship to </p>
                  <p>123 Tang Bat Ho, Ho Chi Minh 70000, Vietnam</p>
                </div>
                <p className='change-info'>Change</p>
              </div>
              <div className='payment__info-method'>
                <p className='title-method-payment'>Method</p>
                <p>
                  DHL Express Service .<span> Free</span>
                </p>
              </div>
            </div>
            <p className='payment-title'>Payment</p>
            <p className='content'>
              All transactions are secure and encrypted.
            </p>
            {showCreditMethod && (
              <div className='payment-method-credit'>
                <div className='payment-method-credit-title'>
                  <div className='payment-method-point'>
                    <p>Credit card</p>
                  </div>
                  <img src={visa} alt='' />
                </div>
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
                <div className='payment-method-paypal-title'>
                  <div
                    className='payment-method-point'
                    onClick={handleShowPaypal}
                  >
                    <img src={paypal} alt='' />
                  </div>
                </div>
              </div>
            )}
            {showPaypalMethod && (
              <div className='payment-method-paypal'>
                <div className='payment-method-credit-title'>
                  <div
                    className='payment-method-point'
                    onClick={handleShowCredit}
                  >
                    <p>Credit card</p>
                  </div>
                  <img src={visa} alt='' />
                </div>
                <div className='payment-method-paypal-title'>
                  <div className='payment-method-point'>
                    <img src={paypal} alt='' />
                  </div>
                </div>
                <div className='payment-paypal-redirect'>
                  <img src={paypalRedirect} alt='paypal redirect' />
                  <p>
                    After clicking “Complete order”, you will be redirected to
                    PayPal to complete your purchase securely.
                  </p>
                </div>
              </div>
            )}
            <p className='payment-title'>Billing address</p>
            <p className='content'>
              Select the address that matches your card or payment method.
            </p>
            {showSameAddress && (
              <div className='shipping-and-billing-with-same'>
                <div className='same-shipping-address'>
                  <div className='payment-method-point'>
                    <p>Same as shipping address</p>
                  </div>
                </div>
                <div
                  className='different-shipping-address'
                  onClick={handleShowDifferentAddress}
                >
                  <div className='payment-method-point'>
                    <p>Use a different billing address</p>
                  </div>
                </div>
              </div>
            )}
            {showDifferentAddress && (
              <div className='shipping-and-billing-with-different'>
                <div className='same-shipping-address'>
                  <div
                    className='payment-method-point'
                    onClick={handleShowSameAddress}
                  >
                    <p>Same as shipping address</p>
                  </div>
                </div>
                <div className='different-shipping-address'>
                  <div className='payment-method-point'>
                    <p>Use a different billing address</p>
                  </div>
                  <div className='different-shipping-info'>
                    <div className='input-name-receive-user'>
                      <div className='first-name'>
                        <PaymentInput
                          name='firstName'
                          type='text'
                          placeholder='First Name'
                          className=''
                          errorMsg=''
                          // register={register}
                        ></PaymentInput>
                      </div>
                      <div className='last-name'>
                        <PaymentInput
                          name='lastName'
                          type='text'
                          placeholder='Last Name'
                          className=''
                          errorMsg=''
                          // register={register}
                        ></PaymentInput>
                      </div>
                    </div>
                    <PaymentInput
                      name='address'
                      type='text'
                      placeholder='Address'
                      className=''
                      errorMsg=''
                      // register={register}
                    ></PaymentInput>
                    <PaymentInput
                      name='city'
                      type='text'
                      placeholder='City'
                      className=''
                      errorMsg=''
                      // register={register}
                    ></PaymentInput>
                    <div className='input-country-and-postal-code'>
                      <div className='input-country'>
                        <PaymentInput
                          name='country'
                          type='text'
                          placeholder='Country/Region'
                          className=''
                          errorMsg=''
                          // register={register}
                        ></PaymentInput>
                      </div>
                      <div className='input-postal-code'>
                        <PaymentInput
                          name='postalCode'
                          type='text'
                          placeholder='Postal code'
                          className=''
                          errorMsg=''
                          // register={register}
                        ></PaymentInput>
                      </div>
                    </div>
                    <PaymentInput
                      name='phone'
                      type='text'
                      placeholder='Phone number'
                      className=''
                      errorMsg=''
                      // register={register}
                    ></PaymentInput>
                  </div>
                </div>
              </div>
            )}
            <div className='checkbox-agree-term'>
              <DefaultCheckbox
                type='checkbox'
                className='agree-term'
                value=''
                checked={false}
              >
                By ticking, you agree to the following terms of sale. Items
                purchased during a promotional event or is a sale item can only
                be returned for a store credit or exchange. Click here to read
                full returns policy.
              </DefaultCheckbox>
            </div>
            <DefaultCheckbox
              type='checkbox'
              className='agree-to-pay'
              value=''
              checked={false}
            >
              I agree to to pay for all import duty charges, customs and local
              sales taxes levied by the country I am shipping to.
            </DefaultCheckbox>
            <div className='shipping-return-or-continue'>
              <div className='return-to-bag'>
                <img src={back} alt='icon back' />
                <p onClick={redirectBack}>Return to bag</p>
              </div>
              <div className='button-continue'>
                <DefaultButton onClick={redirectPaynow}>Pay now</DefaultButton>
              </div>
            </div>
          </div>
        </div>
        <div className='payment__cart'>
          <div className='payment-items'>
            <div className='payment-item'>
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
            <div className='payment-item'>
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
            <div className='payment-item'>
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
          <div className='payment-sale'>
            <div className='payment-sale__input'>
              <PaymentInput
                name='giftCode '
                type='text'
                placeholder='Gift card or discount code'
                className='payment-sale__input--code'
                errorMsg=''
                // register={register}
              ></PaymentInput>
            </div>
            <div className='payment-sale__button'>
              <DefaultButton>Apply</DefaultButton>
            </div>
          </div>
          <div className='payment-total-price-item'>
            <div className='payment-subtotal'>
              <p>Subtotal</p>
              <p>USD $250.00</p>
            </div>
            <div className='payment-shipping-fee'>
              <p>Shipping</p>
              <p>FREE</p>
            </div>
            <div className='payment-total-item'>
              <p>TOTAL</p>
              <p>USD $250.00</p>
            </div>
          </div>
          <div className='payment-footer__content--contact'>
            <div className='payment-footer__publish'>
              <p>© 2022 Pika Meow All Rights Reserved</p>
            </div>
            <div className='payment-footer__content--mail'>
              <img src={mail} alt='phone icon' className='' />
              <p>
                {t('customerSupport')}
                <br />
                <span>CONTACT@PIKA.COM</span>
              </p>
              <p>
                {t('whosesalse')}
                <br />
                <span>TEAM@PIKA.COM</span>
              </p>
            </div>
            <div className='payment-footer__content--phone'>
              <img src={phone} alt='phone icon' className='' />
              <p>+84 986 491 486</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
