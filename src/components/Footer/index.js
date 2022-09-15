import React from 'react';

import './style.scss';

import Collapse from 'components/Collapse';
import notified from 'assets/images/notified.png';
import mail from 'assets/images/icons/mail.svg';
import phone from 'assets/images/icons/phone.svg';
import tiktok from 'assets/images/icons/tiktok.svg';
import facebook from 'assets/images/icons/facebook.svg';
import pinterest from 'assets/images/icons/pinterest.svg';
import instagram from 'assets/images/icons/instagram.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__content--socials'>
          <p className='footer__title'>follow us</p>
          <Collapse title='follow us' className={'footer__collapse'}>
            <div className='footer__content--social'>
              <img src={facebook} alt='facebook social' className='facebook' />
              <p>facebook</p>
            </div>
            <div className='footer__content--social'>
              <img src={instagram} alt='instagram social' />
              <p>instagram</p>
            </div>
            <div className='footer__content--social'>
              <img src={pinterest} alt='pinterest social' />
              <p>pinterest</p>
            </div>
            <div className='footer__content--social'>
              <img src={tiktok} alt='tiktok social' />
              <p>tiktok</p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--abouts'>
          <p className='footer__title'>About</p>
          <Collapse title='About' className={'footer__collapse'}>
            <div className='footer__content--about'>
              <p>brand</p>
              <p>store locator</p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--cares'>
          <p className='footer__title'>Customer care</p>
          <Collapse title='Customer care' className={'footer__collapse'}>
            <div className='footer__content--care'>
              <p>Faq</p>
              <p>sizing</p>
              <p>shipping & returns</p>
              <p>terms & conditions</p>
              <p>privacy policy</p>
              <p>garment care</p>
              <p>make a return</p>
            </div>
          </Collapse>
        </div>
        <div className='footer__content--contact'>
          <p className='footer__title'>Contact us</p>
          <div className='footer__content--phone'>
            <img src={phone} alt='phone icon' className='' />
            <p>+84 986 491 486</p>
          </div>
          <div className='footer__content--mail'>
            <img src={mail} alt='phone icon' className='' />
            <p>
              customer service
              <p>CONTACT@PIKA.COM</p>
            </p>
            <p>
              whosesales & press
              <p>TEAM@PIKA.COM</p>
            </p>
          </div>
          <img src={notified} alt='notified' className='notified' />
        </div>
      </div>
      <div className='footer__publish'>
        <p>© 2022 Pika Meow All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
