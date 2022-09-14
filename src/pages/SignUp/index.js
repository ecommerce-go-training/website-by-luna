import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultCheckbox from 'components/Checkbox';
import DefaultButton from 'components/Button';
import Announce from 'components/Announce';
import DefaultInput from 'components/Input/Defaul';

import './style.scss';

function SignUp() {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='sign-up'>
        <div className='sign-up__form'>
          <h3>Create an account</h3>
          <p>Please register your details below to create an account</p>
          <form>
            <DefaultInput
              name='user'
              type='text'
              placeholder='First name'
              className=''
              onChange
            />
            <DefaultInput
              name='user'
              type='text'
              placeholder='last name'
              className=''
              onChange
            />
            <DefaultInput
              name='user'
              type='text'
              placeholder='phone'
              className=''
              onChange
            />
            <DefaultInput
              name='user'
              type='text'
              placeholder='email'
              className=''
              onChange
            />
            <DefaultInput
              name='password'
              type='password'
              placeholder='password'
              className=''
              onChange
            />
            <DefaultCheckbox
              type='checkbox'
              className=''
              value='Sign me up to reveive updates on new arivals, events, promotions and much more!'
              checked='false'
            />
            <DefaultButton
              type='submit'
              // onClick=
              className=''
            >
              CREATE ACCOUNT
            </DefaultButton>
          </form>
        </div>
        <div className='reset-create__account'>
          <Link to='/' className='reset-password'>
            Forgot your password?
          </Link>
          <Link to='/' className='create__account'>
            SIGN UP
          </Link>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SignUp;
