import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { memo, useState, useEffect } from 'react';

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

const Header = ({ className }) => {
  const [showSearch, onShowSearch] = useState(false);
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

  return (
    <div className='header__container'>
      {showSearch && (
        <div className='search__show'>
          <Search setShow={onShowSearch} />
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
          <Link to='/arrivals' className='link-to-page'>
            {t('newArrivals')}
          </Link>
          <Link to='/' className='link-to-page'>
            {t('shop')}
          </Link>
          <Link to='/winter' className='link-to-page'>
            {t('fallWinter')}
          </Link>
        </div>
        <div className='logo-image'>
          <Link to='/' className='link-to-page'>
            <img src={logoTrans} alt='' className='logo-header' />
          </Link>
          <Link to='/' className='link-to-page'>
            <img src={logo} alt='' className='logo-header__active' />
          </Link>
        </div>
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
          <Link to='/signin' className='link-to-page'>
            Login
          </Link>
          <img src={bag} alt='' className='header-cart' />
          <img src={bagActive} alt='' className='header-cart__active' />
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
