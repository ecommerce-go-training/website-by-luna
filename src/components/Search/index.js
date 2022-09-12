import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import search from 'assets/images/search.svg';
import close from 'assets/images/icons/close.svg';

import './style.scss';

function Search({ setShow }) {
  return (
    <div>
      <div className='Search'>
        <div className='Search__close' onClick={() => setShow(false)}>
          <img src={close} alt='close popup' />
        </div>
        <div className='Search__input'>
          <img src={search} alt='search icon' className='Search__input--icon' />
          <input type='text' />
        </div>
        <p>QUICK LINKS</p>
        <div className='Search__quick'>
          <Link to='/' className='Search__quick--link'>
            Dresses
          </Link>
          <Link to='/' className='Search__quick--link'>
            Tops
          </Link>
          <Link to='/' className='Search__quick--link'>
            Pants
          </Link>
          <Link to='/' className='Search__quick--link'>
            Store
          </Link>
          <Link to='/' className='Search__quick--link'>
            Shipping
          </Link>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  setShow: PropTypes.func.isRequired
};

export default Search;
