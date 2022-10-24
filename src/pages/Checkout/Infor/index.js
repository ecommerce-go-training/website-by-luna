import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DefaultButton from 'components/Button';
import DefaultCheckbox from 'components/Checkbox';
import PaymentInput from 'components/Input/Payment';

import logo from 'assets/images/logo.jpg';
import mail from 'assets/images/icons/mail.svg';
import phone from 'assets/images/icons/phone.svg';
import cartItem1 from 'assets/images/cartItem1.png';
import back from 'assets/images/icons/arrowBack.svg';

import './style.scss';

const Information = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Footer'
  });

  const navigate = useNavigate();
  const redirectHome = () => {
    return navigate('/');
  };

  const redirectShippingPayment = () => {
    return navigate('/ship-payment');
  };

  return (
    <div className='information-container'>
      <div className='information '>
        <div className='information__fill'>
          <form className='information__fill--content'>
            <img
              className='logo-payment-page'
              src={logo}
              alt='logo'
              onClick={redirectHome}
            />
            <p className='checkout-direction'>
              <span className='active'>BAG /</span>{' '}
              <span className='active'>INFORMATION / </span>
              <span> SHIPPING / </span>
              <span>PAYMENT</span>{' '}
            </p>
            <div className='contact-info-title'>
              <p className='contact-title'>Contact information</p>
              <p>
                Already have an account?{' '}
                <span>
                  <b>Log in</b>
                </span>
              </p>
            </div>
            <PaymentInput
              name='email'
              type='text'
              placeholder='Email'
              className=''
              errorMsg='Email invalid'
              // register={register}
            ></PaymentInput>
            <DefaultCheckbox
              type='checkbox'
              className='contact-email__checkbox'
              value='Keep me up to date on news and exclusive offers'
              checked={false}
            >
              Keep me up to date on news and exclusive offers
            </DefaultCheckbox>
            <p className='shipping-address-title'>Shipping address</p>
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
            <DefaultCheckbox
              type='checkbox'
              className='save-information__checkbox'
              value='Save this information for next time'
              checked={false}
            >
              Save this information for next time
            </DefaultCheckbox>
            <div className='return-or-continue'>
              <div className='return-to-bag'>
                <img src={back} alt='icon back' />
                <p>Return to bag</p>
              </div>
              <div className='button-continue'>
                <DefaultButton onClick={redirectShippingPayment}>
                  Continue to shipping
                </DefaultButton>
              </div>
            </div>
          </form>
        </div>
        <div className='information__cart'>
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

export default Information;
