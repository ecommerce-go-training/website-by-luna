import React from 'react';
import { Link } from 'react-router-dom';

import logoTrans from 'assets/images/logoTrans.png';
import bag from 'assets/images/bag.png';
import searchWhite from 'assets/images/searchWhite.png';

import './style.scss';

function Header() {
  return (
    <div>
      <div className='delivery__header--info'></div>
      <div className='header'>
        <div className='navigate-page'>
          <Link to='/' className='link-to-page'>
            NEW ARRIVALS
          </Link>
          <Link to='/' className='link-to-page'>
            SHOP
          </Link>
          <Link to='/' className='link-to-page'>
            FALL WINTER
          </Link>
        </div>
        <div className='logo-image'>
          <img src={logoTrans} alt='' className='logo-header' />
        </div>
        <div className='left-header'>
          <img src={searchWhite} alt='' className='header-search' />
          <Link to='/' className='link-to-page'>
            Login
          </Link>
          <img src={bag} alt='' className='header-cart' />
        </div>
      </div>
    </div>
  );
}

export default Header;
