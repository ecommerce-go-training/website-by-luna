import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from 'components/Search';
import bag from 'assets/images/bag.png';
import bagActive from 'assets/images/bag.svg';
import test from 'assets/images/test1.png';
import logo from 'assets/images/logo.jpg';
import logoTrans from 'assets/images/logoTrans.png';
import searchWhite from 'assets/images/searchWhite.png';
import search from 'assets/images/search.svg';

import './style.scss';

function Header() {
  const [show, setShow] = useState(false);
  const [fix, setFix] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className='header__container'>
      {show && (
        <div className='search__show'>
          <Search setShow={setShow} />
        </div>
      )}
      <div className={fix ? 'header active' : 'header'}>
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
          <img src={logo} alt='' className='logo-header__active' />
        </div>
        <div className='left-header'>
          <img
            src={searchWhite}
            alt=''
            className='header-search'
            onClick={() => setShow(true)}
          />
          <img
            src={search}
            alt=''
            className='header-search__active'
            onClick={() => setShow(true)}
          />
          <Link to='/' className='link-to-page'>
            Login
          </Link>
          <img src={bag} alt='' className='header-cart' />
          <img src={bagActive} alt='' className='header-cart__active' />
        </div>
      </div>
      <div className='test__image'>
        <img src={test} alt='' />
      </div>
    </div>
  );
}

// Search.propTypes = {
//   setShow: PropTypes.func.isRequired
// };

export default Header;
