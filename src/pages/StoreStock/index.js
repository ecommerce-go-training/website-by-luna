import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Announce from 'components/Announcement';

import store1 from 'assets/images/store1.svg';

import './style.scss';

const Store = () => {
  return (
    <div className='store-stock'>
      <Announce />
      <Header className='header white' />
      <div className='store__container'>
        <div className='grid__1--4'>
          <p>Our store</p>
          <p>
            <Link to='/store/ho-chi-minh' className='link__page'>
              Ho chi minh
            </Link>
          </p>
          <p>
            <Link to='/store' className='link__page active'>
              stockist
            </Link>
          </p>
        </div>
        <div className='grid__3--4'>
          <img src={store1} alt='' />
          <div className='store__address'>
            <div className='store__address--item'>
              <h4>ONLINE</h4>
              <p>Moda Oprerandi</p>
              <a href='https://www.modaoprerandi.com'>
                https://www.modaoprerandi.com
              </a>
              <p>Revolve</p>
              <a href='contact@pikameow.com'>contact@pikameow.com</a>
            </div>
            <div className='store__address--item'>
              <h4>USA</h4>
              <p>Opening hours:</p>
              <span>Monday - Sunday 10AM - 10PM</span>
              <p>Contact</p>
              <a href='contact@pikameow.com'>contact@pikameow.com</a>
              <p className='phone'>+84 798 450 679</p>
            </div>
            <div className='store__address--item'>
              <h4>AUSTRALIA</h4>
              <p>Opening hours:</p>
              <span>Monday - Sunday 10AM - 10PM</span>
              <p>Contact</p>
              <a href='contact@pikameow.com'>contact@pikameow.com</a>
              <p className='phone'>+84 798 450 679</p>
            </div>
            <div className='store__address--item'>
              <h4>ASIAN</h4>
              <p>Opening hours:</p>
              <span>Monday - Sunday 10AM - 10PM</span>
              <p>Contact</p>
              <a href='contact@pikameow.com'>contact@pikameow.com</a>
              <br />
              <p className='phone'>+84 798 450 679</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
