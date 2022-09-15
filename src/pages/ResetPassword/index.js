import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announce';
import DefaultInput from 'components/Input/Defaul';

import './style.scss';

function Reset() {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='reset-password'>
        <h3>Create an account</h3>
        <p className='please-fill-mail'>
          Please enter your email address and click on submit. We will send you
          an email containing a link that you can click to create a new
          password.
        </p>
        <form>
          <DefaultInput
            name='user'
            type='text'
            placeholder='email'
            className=''
            onChange
          />
          <p className='notify-no-account'>No account found with that email!</p>
          <DefaultButton
            type='submit'
            // onClick=
            className=''
          >
            SUBMIT
          </DefaultButton>
        </form>
        <Link to='/' className='back-signin'>
          Back to sign in
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Reset;
