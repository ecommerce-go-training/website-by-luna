import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Defaul';

import './style.scss';

const ChangePass = () => {
  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='change-password'>
        <h3>Create new password</h3>
        <p className='please-fill-pass'>
          Enter a new password for pikameow@gmail.com
        </p>
        <form>
          <DefaultInput
            name='password'
            type='password'
            placeholder='password'
            className=''
            onChange
          />
          <DefaultInput
            name='confirm password'
            type='password'
            placeholder='Confirm password'
            className=''
            onChange
          />

          <DefaultButton
            type='submit'
            // onClick=
            className=''
          >
            RESET PASSWORD
          </DefaultButton>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ChangePass;
