import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Default';
import DefaultButton from 'components/Button';
// import Track from 'assets/images/icons/track.svg';

import './style.scss';

const Account = () => {
  const [showAddress, setShowAddress] = useState(false);
  const handleShowAddress = () => {
    setShowAddress(!showAddress);
  };
  return (
    <div className='account-container'>
      <Announce />
      <Header className='header white' />
      <div className='account'>
        <div className='account__page'>
          <p>
            <Link to='/history' className='link__page'>
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
          <div className='account__page--mobile'>
            <span>orders & return | </span>
            <span className='active'>address book | </span>
            <span>newsletter | </span>
            <span>log out</span>
          </div>
        </div>
        <div className='account__content'>
          {/* <div className='address-user'>
            <div className='user-name'>
              <p>LEO NGUYEN</p>
              <div className='user-update'>
                <p>EDIT</p>
                <span>|</span>
                <img src={Track} alt='Delete' />
              </div>
            </div>
            <span>1323 Vo Van Kiet, Ward 16, District 1</span>
            <br />
            <span>Ho Chi Minh City, 70000</span>
            <br />
            <span>Vietnam, 700000</span>
            <br />
            <span>+84 123 45 67 89</span>
            <br />
          </div> */}
          <p>Save your details to complete the order process more quickly</p>
          <div className='add-new-address'>
            <div className='address-title' onClick={handleShowAddress}>
              <span>ADD NEW ADDRESS</span>
            </div>
            {showAddress && (
              <form
                className='address_fill-info'
                style={{ display: showAddress === true ? 'block' : 'none' }}
              >
                <DefaultInput
                  name='firstName'
                  type='text'
                  placeholder='First Name'
                  className=''
                />
                <DefaultInput
                  name='lastName'
                  type='text'
                  placeholder='Last Name'
                  className=''
                />
                <DefaultInput
                  name='address'
                  type='text'
                  placeholder='Street Address'
                  className=''
                />
                <DefaultInput
                  name='city'
                  type='text'
                  placeholder='City'
                  className=''
                />
                <div className='country-postal-code'>
                  <div className='country'>
                    {/* <label
                    htmlFor=''
                    className='select-label'
                    data-content='Country'
                  ></label> */}
                    <select
                      name='country'
                      id=''
                      className='select-input'
                      placeholder='Country'
                    >
                      <option value='United State'>United State</option>
                      <option value='United State'>Anh</option>
                    </select>
                  </div>
                  <DefaultInput
                    name='postal'
                    type='text'
                    placeholder='postal'
                    className='postal'
                  />
                </div>
                <DefaultInput
                  name='phone'
                  type='tel'
                  placeholder='Phone number'
                  className=''
                />
                <div className='button-save-address'>
                  <div>
                    <DefaultButton className='button-save'>SAVE</DefaultButton>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        {/* <div className='back-drop'>
          <div className='popup-confirm-delete'>
            <p>Are you sure you want to delete this address?</p>
            <div className='button-confirm'>
              <DefaultButton className='button-confirm__yes'>YES</DefaultButton>
              <DefaultButton className='button-confirm__no'>
                CANCEL
              </DefaultButton>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Account;
