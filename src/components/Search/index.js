import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import search from 'assets/images/search.svg';
import close from 'assets/images/icons/close.svg';

import './style.scss';

const Search = ({ setShowSearch }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Components.Search'
  });
  return (
    <div className='Search'>
      <div className='Search__close' onClick={() => setShowSearch(false)}>
        <img src={close} alt='close popup' />
      </div>
      <div className='Search__input'>
        <img src={search} alt='search icon' className='Search__input--icon' />
        <input type='text' />
      </div>
      <p>{t('quickLink')}</p>
      <div className='Search__quick'>
        <Link to='/' className='Search__quick--link'>
          {t('dress')}
        </Link>
        <Link to='/' className='Search__quick--link'>
          {t('top')}
        </Link>
        <Link to='/' className='Search__quick--link'>
          {t('pant')}
        </Link>
        <Link to='/store' className='Search__quick--link'>
          {t('store')}
        </Link>
        <Link to='/ship' className='Search__quick--link'>
          {t('ship')}
        </Link>
      </div>
    </div>
  );
};

Search.propTypes = {
  setShowSearch: PropTypes.func.isRequired
};

export default Search;
