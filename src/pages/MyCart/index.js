import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

import cartItem1 from 'assets/images/cartItem1.png';
import time from 'assets/images/icons/time.svg';

import './style.scss';
import DefaultButton from 'components/Button';

const MyCart = ({ setShowMyCart }) => {
  // const navigate = useNavigate();
  // const redirectCart = () => {
  //   return navigate('/cart');
  // };
  return (
    <div className='my-cart'>
      <button className='icon-exit' onClick={() => setShowMyCart(false)}>
        <img className='button-icon' src={time} alt='icon exit' />
      </button>
      <div className='title-MyCart'>
        <h2>My cart</h2>
      </div>
      <div className='my-cart__items'>
        <div className='my-cart__items--info'>
          <p className='title-item'>
            Holly Sheer Blouse in Safari | <b>M</b>
          </p>
          <div className='item-price'>
            <div className='item-price__unit'>
              <p className='quickcart-item-qty'>
                <span className='quickcart-item-qty-minus'>-</span>
                <input
                  className='quickcart-item-qty-number'
                  type='number'
                  value='1'
                  min={1}
                  step='1'
                  disabled
                />
                <span className='quickcart-item-qty-plus'>+</span>
              </p>
              <p>2.250.000 đ</p>
            </div>
            <div className='item-price__sum'>
              <p>2.250.000 đ</p>
              <p className='item-price__sum--remove'>Remove</p>
            </div>
          </div>
        </div>
        <div className='my-cart__items--image'>
          <img src={cartItem1} alt='image item 1' />
        </div>
      </div>
      <div className='button'>
        <DefaultButton className='button__view-cart'>VIEW CART</DefaultButton>
        <DefaultButton className='button__check-out'>
          Check out
          <p>2.250.000 đ</p>
        </DefaultButton>
      </div>
    </div>
  );
};

MyCart.propTypes = {
  setShowMyCart: PropTypes.func.isRequired
};

export default MyCart;
