import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Defaul';

import './style.scss';

const Account = () => {
  return (
    <div className='account-container'>
      <Announce />
      <Header className='header white' />
      <div className='account'>
        <div className='account__page'>
          <p>
            <Link to='/' className='link__page'>
              orders & returns
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page active'>
              address book
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              newsletter
            </Link>
          </p>
          <p className='logout'>
            <Link to='/' className='link__page '>
              Log out
            </Link>
          </p>
        </div>
        <div className='account__content'>
          <p>Save your details to complete the order process more quickly</p>
          <div className='add-new-address'>
            <span>ADD NEW ADDRESS</span>
            <div className='address_fill-info'>
              <DefaultInput></DefaultInput>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
