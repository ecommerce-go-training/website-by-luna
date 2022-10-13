import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import check from 'assets/images/checkCircle.svg';

import './style.scss';

const ChangeSuccess = () => {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='change-success'>
        <img src={check} alt='checkCircle success icon' />
        <h3>Password changed</h3>
        <p className='please-fill-pass'>
          You can sign in with your new password
        </p>
        <DefaultButton
          type='submit'
          // onClick=
          className='sign-in__button'
        >
          SIGN IN
        </DefaultButton>
      </div>

      <Footer />
    </div>
  );
};

export default ChangeSuccess;
