import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
// import Slider from 'components/Slider';
import Announce from 'components/Announcement';
import DefaultButton from 'components/Button';

import img1 from 'assets/images/img1.jpg';
import img2 from 'assets/images/img2.jpg';
import img3 from 'assets/images/img3.jpg';
import img4 from 'assets/images/img4.jpg';
import img5 from 'assets/images/img5.jpg';
import imgSeason1 from 'assets/images/imgSeason1.png';
import imgSeason2 from 'assets/images/imgSeason2.png';
import imgSeason3 from 'assets/images/imgSeason3.png';
import imgSeason4 from 'assets/images/imgSeason4.png';
import imgSeason5 from 'assets/images/imgSeason5.png';
import imgSeason6 from 'assets/images/imgSeason6.png';
import imgSeason7 from 'assets/images/imgSeason7.png';
import imgSeason8 from 'assets/images/imgSeason8.png';
import background from 'assets/images/background2.svg';
import rightArrow from 'assets/images/icons/rightArrow.svg';
import backgroundMobile from 'assets/images/seasonMobile.png';
import imgSeasonMobile from 'assets/images/imgSeasonMobile.png';

import './style.scss';

const FallWinter = () => {
  return (
    <div>
      <Announce />
      <Header className='header' />
      <div className='season-container'>
        <div className='season-header'>
          <img src={background} alt='background' className='background' />
          <img
            src={backgroundMobile}
            alt='background mobile'
            className='background-mobile'
          />
          <div className='introduce-infor'>
            <p className='p-desktop'>FALL / WINTER 2022</p>
            <p className='p-mobile'>NEW ARRIVAL</p>
            <h3>FALL WINTER</h3>
            <h4>RESORT 2022</h4>
            <p className='introduce p-desktop'>
              The Resort 2021 collection is a love letter to our youth. Discover
              the beauty of blooming flowers under the blue sky and sunny
            </p>
            <Link to='/' className='invite-discover'>
              Discover
            </Link>
          </div>
        </div>
        <div className='grid'>
          <div className='grid__full'>
            <div className='grid__full--2'>
              <div className='grid__full--content'>
                <p className='p-desktop'>FALL/WINTER 21 E</p>
                <p className='p-mobile'>
                  The Resort 2021 collection is a love letter to our youth.
                  Discover the beauty of blooming flowers under the blue sky and
                  sunny beaches in latest campaign.
                </p>
              </div>
              <img src={imgSeason1} alt='' />
              <div className='img__content'>
                <p>NEW IN MINIDRESS </p>
                <img src={rightArrow} alt='' />
              </div>
              <img src={imgSeason3} alt='' />
              <div className='img__content'>
                <p>SHOP THE LOOK</p>
                <img src={rightArrow} alt='' />
              </div>
              <img src={imgSeason5} alt='' />
              <div className='img__content'>
                <p>SHOP THE LOOK</p>
                <img src={rightArrow} alt='' />
              </div>
              <div className='grid__full--content'>
                <p>
                  Guess it`s time for you to bring the happiness of Summer into
                  your closet.
                </p>
              </div>
            </div>
            <div className='grid__full--2'>
              <img src={imgSeason2} alt='' />
              <div className='img__content'>
                <p>NEW IN TOP </p>
                <img src={rightArrow} alt='' />
              </div>
              <div className='grid__full--content'>
                <p>
                  This season is the first time we`ve brought our nostalgia into
                  it with nature, friends, and flowers. We miss the feeling of
                  lying on the hillside, listening to the waves, and feeling our
                  souls soften through the sunset.
                </p>
              </div>
              <img src={imgSeason4} alt='' />
              <div className='img__content'>
                <p>NEW IN MINIDRESS </p>
                <img src={rightArrow} alt='' />
              </div>
              <div className='grid__full--content'>
                <p>
                  Imagine you stand here like me. Breathe the pure air that
                  spills the lungs together. Your soul is purified for the new
                  day. A space filled with light.
                </p>
              </div>
              <img src={imgSeason6} alt='' />
              <div className='img__content'>
                <p>SHOP THE LOOK</p>
                <img src={rightArrow} alt='' />
              </div>
            </div>
          </div>
          <div className='grid__image'>
            <img src={imgSeason7} alt='' className='grid__image--square' />
            <img src={imgSeasonMobile} alt='' className='grid__image--mobile' />
            <img src={imgSeason8} alt='' className='grid__image--img' />
            <div className='collection-infor'>
              <h3>
                LOUNGEWEAR <br />
                COLLECTION
              </h3>
              <p className='introduce'>
                A mini collection created from the 3rd quarantine in our
                hometown with a message of positivity, helping women to be more
                optimistic and love themselves more when cooking at home,
                lounging on the balcony or walking in the back-yard.
              </p>
              <Link to='/' className='invite-discover'>
                Discover
              </Link>
            </div>
          </div>
          <p className='follow-us'>
            FOLLOW US{' '}
            <Link to='/' className='link__follow-us'>
              @PIKAMEOW.XO
            </Link>
          </p>
          <div className='grid__footer'>
            <div className='grid__footer--item'>
              <img src={img1} alt='' className='image__footer' />
            </div>
            <div className='grid__footer--item'>
              <img src={img2} alt='' className='image__footer' />
            </div>
            <div className='grid__footer--item'>
              <img src={img3} alt='' className='image__footer' />
            </div>
            <div className='grid__footer--item'>
              <img src={img4} alt='' className='image__footer' />
            </div>
            <div className='grid__footer--item'>
              <img src={img5} alt='' className='image__footer' />
            </div>
          </div>
          <div className='signup-for-update'>
            <h4>SIGN UP FOR UPDATE</h4>
            <p>
              Sign-up to receive 10% of your first purchase as well as the
              latest updates on new arrivals, exclusive promotions and events.
            </p>
            <DefaultButton className='button-signup'>SIGN UP</DefaultButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FallWinter;
