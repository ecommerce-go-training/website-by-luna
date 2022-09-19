import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Search from 'components/Search';
import bag from 'assets/images/bag.png';
import logo from 'assets/images/logo.jpg';
import search from 'assets/images/search.svg';
import bagActive from 'assets/images/bag.svg';
import navbar from 'assets/images/icons/navbar.svg';
import logoTrans from 'assets/images/logoTrans.png';
import searchWhite from 'assets/images/searchWhite.png';
import navbarAct from 'assets/images/icons/navbarAct.svg';

import './style.scss';
import classNames from 'classnames';

function Header({ className }) {
  const [show, setShow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
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
      <div className={classNames(className, { white: isScrolling })}>
        <img src={navbar} alt='icon navbar' className='header__navbar' />
        <img
          src={navbarAct}
          alt='icon navbar'
          className='header__navbar--active'
        />
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
          <Link to='/signin' className='link-to-page'>
            Login
          </Link>
          <img src={bag} alt='' className='header-cart' />
          <img src={bagActive} alt='' className='header-cart__active' />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  className: 'header'
};

Header.propTypes = {
  className: PropTypes.oneOf(['header', 'header white'])
};

export default Header;
