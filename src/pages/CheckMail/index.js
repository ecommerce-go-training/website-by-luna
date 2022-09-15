import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announce';
import DefaultInput from 'components/Input/Defaul';
import checkmail from 'assets/images/checkmail.svg';

import './style.scss';

function CheckMail() {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='check-mail'>
        <h3>Check your email</h3>
        <p className='please-code'>
          Please check your mail box and click in the received link to reset
          your new password
        </p>
        <form>
          <img
            src={checkmail}
            alt='check mail success'
            className='check-mail__image'
          />
          <DefaultInput
            name='user'
            type='text'
            placeholder='Code'
            className=''
            onChange
          />
          <DefaultButton
            type='submit'
            // onClick=
            className=''
          >
            SUBMIT
          </DefaultButton>
        </form>
        <Link to='/' className='notify-code'>
          Didn`t receive the code?
          <Link to='/' className='resend'>
            {' '}
            Resend
          </Link>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default CheckMail;
