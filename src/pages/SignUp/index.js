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
          <p className='please-register'>
            Please register your details below to create an account
          </p>
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
              className='sign-up__checkbox'
              value='Sign me up to reveive updates on new arivals, events, promotions and much more!'
              checked='false'
              // children='Sign me up to reveive updates on new arivals, events, promotions and much more!'
            >
              Sign me up to reveive updates on new arivals, events, promotions
              and much more!
            </DefaultCheckbox>
            <p className='agree-policy'>
              By signing up you agree to Dear José{' '}
              <Link to='/' className='agree-policy__link'>
                {''}
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to='/' className='agree-policy__link'>
                {''}
                Privacy Policy
              </Link>
            </p>
            <DefaultButton
              type='submit'
              // onClick=
              className=''
            >
              CREATE
            </DefaultButton>
          </form>
        </div>
        <Link to='/' className='have-account'>
          I have an account
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
