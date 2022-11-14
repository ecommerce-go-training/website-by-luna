import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Announce from 'components/Announcement';

import store2 from 'assets/images/store2.webp';

import './style.scss';

const Store = () => {
  return (
    <div className='store-hcm'>
      <Announce />
      <Header className='header white' />
      <div className='storehcm__container'>
        <div className='grid__1--4'>
          <p>Our store</p>
          <p>
            <Link to='/storehcm' className='link__page active'>
              Ho chi minh
            </Link>
          </p>
          <p>
            <Link to='/store' className='link__page '>
              stockist
            </Link>
          </p>
        </div>
        <div className='grid__3--4'>
          <img src={store2} alt='' />
          <div className='storehcm__address'>
            <div className='storehcm__address--item'>
              <h4>49A NGUYEN TRAI, DISTRICT 1, HOCHIMINH CITY, VIETNAM</h4>
              <p>Opening hours:</p>
              <span>Monday - Sunday 10AM - 10PM</span>
              <p>Contact</p>
              <a href='contact@pikameow.com'>contact@pikameow.com</a>
              <p className='phone'>+84 798 450 679</p>
            </div>
            <div className='storehcm__address--map'>
              <p>
                Our new era is marked by a new concept store with endless
                inspriration from fairy tales, We believe fashion is a miracle
                of this world by creating beautiful things and conveying
                civilized storis. Discover our store to not only dress in Meow,
                but also to feel Meow
              </p>
              <Link to='/' className='link__page--map'>
                view the map here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
