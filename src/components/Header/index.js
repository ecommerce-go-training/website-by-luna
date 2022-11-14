import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { memo, useState, useEffect } from 'react';

import Search from 'components/Search';
import MyCart from 'pages/MyCart';
import bag from 'assets/images/bag.png';
import logo from 'assets/images/logo.jpg';
import search from 'assets/images/search.svg';
import bagActive from 'assets/images/bag.svg';
import time from 'assets/images/icons/time.svg';
import navbar from 'assets/images/icons/navbar.svg';
import logoTrans from 'assets/images/logoTrans.png';
import searchWhite from 'assets/images/searchWhite.png';
import navbarAct from 'assets/images/icons/navbarAct.svg';

import './style.scss';

const Header = ({ className }) => {
  const [showSearch, onShowSearch] = useState(false);
  const [showMyCart, onShowMyCart] = useState(false);
  const [showLinkPage, onShowLinkPage] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);

  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Header'
  });

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem('userInfo'));
  const token = JSON.parse(localStorage.getItem('accessToken'));
  const checkIsLoggedIn = () => {
    if (user && token) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return false;
    }
  };

  const navigate = useNavigate();
  const redirectHome = () => {
    return navigate('/');
  };

  return (
    <div className='header__container'>
      {showSearch && (
        <div className='search__show'>
          <Search setShowSearch={onShowSearch} />
        </div>
      )}
      {showMyCart && (
        <div className='my-cart'>
          <div className='back-drop' onClick={() => onShowMyCart(false)}></div>
          <div className='show-my-cart'>
            <MyCart setShowMyCart={onShowMyCart} />
          </div>
        </div>
      )}
      <div className={classNames(className, { white: isScrolling })}>
        <img
          src={navbar}
          alt='icon navbar'
          className='header__navbar'
          onClick={() => onShowLinkPage(true)}
        />
        <img
          src={navbarAct}
          alt='icon navbar'
          className='header__navbar--active'
          onClick={() => onShowLinkPage(true)}
        />
        <div className='navigate-page'>
          <Link to='/arrivals' className='link-to-page'>
            {t('newArrivals')}
          </Link>
          <Link to='/' className='link-to-page'>
            {t('sales')}
          </Link>
          <Link to='/winter' className='link-to-page'>
            {t('shop')}
          </Link>
        </div>
        <div className='logo-image'>
          <img
            src={logoTrans}
            alt=''
            className='logo-header'
            onClick={redirectHome}
          />
          <img
            src={logo}
            alt=''
            className='logo-header__active'
            // {classNames('logo-header__active', {
            //   logoWhite: isScrolling
            // })}
            onClick={redirectHome}
          />
        </div>
        {showLinkPage && (
          <div className='navigate-mobile'>
            <div
              className='back-drop'
              onClick={() => onShowLinkPage(false)}
            ></div>
            <div className='navigate-page-mobile'>
              <img
                src={logo}
                alt=''
                className='logo-header__mobile'
                onClick={redirectHome}
              />
              <img
                src={time}
                alt='icon exit'
                className='icon-exit'
                onClick={() => onShowLinkPage(false)}
              />
              <Link to='/arrivals' className='link-to-page-mobile'>
                {t('newArrivals')}
              </Link>
              <Link to='/' className='link-to-page-mobile'>
                {t('sales')}
              </Link>
              <Link to='/winter' className='link-to-page-mobile'>
                {t('shop')}
              </Link>
              {!checkIsLoggedIn() ? (
                <Link to='/sign-in' className='link-to-page-mobile'>
                  <br />
                  Login
                </Link>
              ) : (
                <Link to='/account' className='link-to-page-mobile'>
                  <br />
                  {user.firstName} {user.lastName}
                </Link>
              )}
            </div>
          </div>
        )}
        <div className='left-header'>
          <img
            src={searchWhite}
            alt=''
            className='header-search'
            onClick={() => onShowSearch(true)}
          />
          <img
            src={search}
            alt=''
            className='header-search__active'
            onClick={() => onShowSearch(true)}
          />
          {!checkIsLoggedIn() ? (
            <Link to='/sign-in' className='link-to-page'>
              Login
            </Link>
          ) : (
            <Link to='/account' className='link-to-page'>
              {user.firstName} {user.lastName}
            </Link>
          )}
          <img
            src={bag}
            alt=''
            className='header-cart'
            onClick={() => onShowMyCart(true)}
          />
          <img
            src={bagActive}
            alt=''
            className='header-cart__active'
            onClick={() => onShowMyCart(true)}
          />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  className: 'header'
};

Header.propTypes = {
  className: PropTypes.oneOf(['header', 'header white'])
};

export default memo(Header);
