import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Slider from 'components/Slider';
import Announce from 'components/Announce';
import DefaultButton from 'components/Button';

import img1 from 'assets/images/img1.jpg';
import img2 from 'assets/images/img2.jpg';
import img3 from 'assets/images/img3.jpg';
import img4 from 'assets/images/img4.jpg';
import img5 from 'assets/images/img5.jpg';
import image1 from 'assets/images/image1.png';
import image2 from 'assets/images/image2.png';
import image3 from 'assets/images/image3.png';
import image4 from 'assets/images/image4.png';
import image5 from 'assets/images/image5.png';
import image6 from 'assets/images/image6.png';
import image7 from 'assets/images/image7.png';
import image8 from 'assets/images/image8.png';
import homeImg1 from 'assets/images/homeImg1.png';
import homeImg2 from 'assets/images/homeImg2.png';
import imgMobile1 from 'assets/images/imgMobile1.png';
import imgMobile2 from 'assets/images/imgMobile2.png';
import background from 'assets/images/background.png';

import './style.scss';

const dataSlider = [
  {
    image: image1,
    title: 'NEW IN DRESSES',
    price: '990.000 VND'
  },
  {
    image: image2,
    title: 'NEW IN TOP',
    price: '990.000 VND'
  },
  {
    image: image3,
    title: 'NEW IN SHORTS',
    price: '990.000 VND'
  },
  {
    image: image4,
    title: 'NEW IN JEANS',
    price: '990.000 VND'
  },
  {
    image: image2,
    title: 'NEW IN TOP',
    price: '990.000 VND'
  },
  {
    image: image3,
    title: 'NEW IN SHORTS',
    price: '990.000 VND'
  },
  {
    image: image1,
    title: 'NEW IN DRESSES',
    price: '990.000 VND'
  },
  {
    image: image4,
    title: 'NEW IN JEANS',
    price: '990.000 VND'
  },
  {
    image: image2,
    title: 'NEW IN TOP',
    price: '990.000 VND'
  },
  {
    image: image3,
    title: 'NEW IN SHORTS',
    price: '990.000 VND'
  },
  {
    image: image4,
    title: 'NEW IN JEANS',
    price: '990.000 VND'
  },
  {
    image: image1,
    title: 'NEW IN DRESSES',
    price: '990.000 VND'
  }
];

const dataSlider2 = [
  {
    image: image5,
    title: 'LOOK 1:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image6,
    title: 'LOOK 2:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image7,
    title: 'LOOK 3:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image8,
    title: 'LOOK 4:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image5,
    title: 'LOOK 1:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image6,
    title: 'LOOK 2:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image7,
    title: 'LOOK 3:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image5,
    title: 'LOOK 1:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image8,
    title: 'LOOK 4:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image6,
    title: 'LOOK 2:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image7,
    title: 'LOOK 3:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  },
  {
    image: image5,
    title: 'LOOK 1:',
    price: 'Our buttery soft, molds-to-your-body fabric that stretches to twice'
  }
];

function Home() {
  return (
    <div>
      <Announce />
      <Header className='header' />
      <div className='home-container'>
        <img src={background} alt='background' />
        <div className='introduce-infor'>
          <h3>`JOSÉ AURA`</h3>
          <h4>FALL 22</h4>
          <p className='introduce'>
            The Resort 2021 collection is a love letter to our youth. Discover
            the beauty of blooming flowers under the blue sky and sunny
          </p>
          <Link to='/' className='invite-collection'>
            Explore the collection
          </Link>
        </div>
        <p className='introduce-mobile'>
          The Resort 2021 collection is a love letter to our youth. Discover the
          beauty of blooming flowers under the blue sky and sunny
        </p>
        <div className='grid'>
          <div className='grid__4--2'>
            <Link to='/' className='type-item active'>
              Shop new arrivals
            </Link>
            <Link to='/' className='type-item'>
              Shop best seller
            </Link>
          </div>
          <Slider data={dataSlider} />
          <div className='image-home'>
            <img src={homeImg1} alt='image home page' />
            <img src={homeImg2} alt='image home page' />
          </div>
          <div className='grid__mobile'>
            <img src={imgMobile1} alt='' className='grid__mobile--image' />
            <img src={imgMobile2} alt='' className='grid__mobile--image' />
          </div>
          <Link to='/' className='link__the-beach'>
            THE BEACH EDIT
          </Link>
          <Slider data={dataSlider2} />
          <p className='follow-us'>
            FOLLOW US{' '}
            <Link to='/' className='link__follow-us'>
              @PIKAMEOW.XO
            </Link>
          </p>
          <div className='grid__full'>
            <div className='grid__full--item'>
              <img src={img1} alt='' className='image__footer' />
            </div>
            <div className='grid__full--item'>
              <img src={img2} alt='' className='image__footer' />
            </div>
            <div className='grid__full--item'>
              <img src={img3} alt='' className='image__footer' />
            </div>
            <div className='grid__full--item'>
              <img src={img4} alt='' className='image__footer' />
            </div>
            <div className='grid__full--item'>
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
}

export default Home;
