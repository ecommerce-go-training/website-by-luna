import React from 'react';
// import { Link } from 'react-router-dom';

// import Header from 'components/Header';
// // import Footer from 'components/Footer';
// import DefaultButton from 'components/Button';
// import Announce from 'components/Announce';
// import DefaultInput from 'components/Input/Defaul';

import './style.scss';

// eslint-disable-next-line react/prop-types
function Input({ label, type }) {
  return (
    <div style={{ width: '100%' }}>
      <p style={{ margin: 0 }}>{label}</p>
      <input style={{ width: '100%' }} type={type} />
    </div>
  );
}

function SignIn() {
  return (
    <div className='sign-in-v2'>
      {/* <Announce />
      <Header className='header white' />
      <div className='sign-in'>
        <div className='sign-in__form'>
          <h3>Log In</h3>
          <form>
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
            <DefaultButton
              type='submit'
              // onClick=
              className=''
            >
              SIGN IN
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
      </div> */}
      {/* <footer>
        <Footer />
      </footer> */}
      <h2>Title</h2>
      <form>
        <Input label='email' />
        <Input label='password' type='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
