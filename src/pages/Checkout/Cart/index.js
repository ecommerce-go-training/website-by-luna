import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import DefaultButton from 'components/Button';

import time from 'assets/images/icons/time.svg';
import cartItem1 from 'assets/images/cartItem1.png';

import './style.scss';

const Cart = () => {
  const navigate = useNavigate();
  const redirectInfo = () => {
    return navigate('/info');
  };
  return (
    <div className='cart-container'>
      <Announce />
      <Header className='header white' />
      <div className='cart'>
        <p className='cart-title-and-qty-item'>
          Cart <span>2 items</span>
        </p>
        <div className='cart__items'>
          <div className='cart__items--item'>
            <img className='item-img' src={cartItem1} alt='image item' />
            <img className='icon-time' src={time} alt='icon time' />
            <div className='cart__items--item-info'>
              <p className='cart__item--info-name'>
                Holly Sheer Blouse in Safari
              </p>
              <p className='cart__item--info-price'>USD $250</p>
              <p>
                Color:{' '}
                <select name='color' id=''>
                  <option value='white'>white</option>
                  <option value='pink'>pink</option>
                </select>
              </p>
              <p>
                Size:{' '}
                <select name='size' id=''>
                  <option value='S'>S</option>
                  <option value='M'>M</option>
                  <option value='L'>L</option>
                </select>
              </p>
              <p>
                Quantity:{' '}
                <select name='quantity' id=''>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </p>
            </div>
          </div>
          <div className='cart__items--item'>
            <img className='item-img' src={cartItem1} alt='image item' />
            <img className='icon-time' src={time} alt='icon time' />
            <div className='cart__items--item-info'>
              <p className='cart__item--info-name'>
                Holly Sheer Blouse in Safari
              </p>
              <p className='cart__item--info-price'>USD $250</p>
              <p>
                Color:{' '}
                <select name='color' id=''>
                  <option value='white'>white</option>
                  <option value='pink'>pink</option>
                </select>
              </p>
              <p>
                Size:{' '}
                <select name='size' id=''>
                  <option value='S'>S</option>
                  <option value='M'>M</option>
                  <option value='L'>L</option>
                </select>
              </p>
              <p>
                Quantity:{' '}
                <select name='quantity' id=''>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </p>
            </div>
          </div>
        </div>
        <div className='total-payment'>
          <div className='total-and-button-proceed'>
            <p>
              total <span>USD $250</span>
            </p>
            <DefaultButton onClick={redirectInfo}>
              PROCEED TO CHECKOUT
            </DefaultButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
