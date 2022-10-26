import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import DefaultButton from 'components/Button';
// import DefaultCheckbox from 'components/Checkbox';
import PaymentInput from 'components/Input/Payment';

import logo from 'assets/images/logo.jpg';
import mail from 'assets/images/icons/mail.svg';
import phone from 'assets/images/icons/phone.svg';
import cartItem1 from 'assets/images/cartItem1.png';
import back from 'assets/images/icons/arrowBack.svg';

import './style.scss';

const ShipPayment = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Footer'
  });

  const navigate = useNavigate();
  const redirectHome = () => {
    return navigate('/');
  };

  const redirectPayment = () => {
    return navigate('/payment');
  };

  return (
    <div className='ship-payment-container'>
      <div className='ship-payment '>
        <div className='ship-payment__info'>
          <div className='ship-payment__info--content'>
            <img
              className='logo-payment-page'
              src={logo}
              alt='logo'
              onClick={redirectHome}
            />
            <p className='checkout-direction'>
              <span className='active'>BAG /</span>{' '}
              <span className='active'>INFORMATION / </span>
              <span className='active'> SHIPPING / </span>
              <span>PAYMENT</span>{' '}
            </p>
            <div className='ship-payment__info-contact-address'>
              <div className='ship-payment__info-contact'>
                <div className='ship-payment__info-contact-content'>
                  <p className='title-user'>Contact </p>
                  <p>tinmar09poke@gmail.com</p>
                </div>
                <p className='change-info'>Change</p>
              </div>
              <div className='ship-payment__info-address'>
                <div className='ship-payment__info-address-content'>
                  <p className='title-type'>Ship to </p>
                  <p>123 Tang Bat Ho, Ho Chi Minh 70000, Vietnam</p>
                </div>
                <p className='change-info'>Change</p>
              </div>
            </div>
            <p className='shipping-method-title'>Shipping method</p>
            {/* <div className='shipping-method-save-delivery'>
              <div className='shipping-method-point-and-name'>
                <div className='shipping-method-point'>
                  <p>GIAO HÀNG TIẾT KIỆM</p>
                </div>
                <p>40.000 VND</p>
              </div>
              <p className='time-shipping'>2 - 5 days bussiness days</p>
            </div> */}
            {/* <div className='shipping-method-express-service'>
              <div className='shipping-method-point-and-name'>
                <div className='shipping-method-point'>
                  <p>DHL Express Service</p>
                </div>
                <p>Free</p>
              </div>
            </div> */}
            <div className='shipping-method-save'>
              <div className='shipping-method-point-and-name'>
                <div className='shipping-method-point'>
                  <p>GIAO HÀNG TIẾT KIỆM</p>
                </div>
                <p>40.000 VND</p>
              </div>
            </div>
            <div className='shipping-return-or-continue'>
              <div className='return-to-bag'>
                <img src={back} alt='icon back' />
                <p>Return to bag</p>
              </div>
              <div className='button-continue'>
                <DefaultButton onClick={redirectPayment}>
                  Continue to payment
                </DefaultButton>
              </div>
            </div>
          </div>
        </div>
        <div className='ship-payment__cart'>
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

export default ShipPayment;
