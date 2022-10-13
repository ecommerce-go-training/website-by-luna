import React from 'react';
import Slider from 'components/Slider';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import Collapse from 'components/Collapse';
import DefaultButton from 'components/Button';

import ArrivalImg1 from 'assets/images/arrivalImg1.png';
import ArrivalImg2 from 'assets/images/arrivalImg2.png';
import ArrivalImg3 from 'assets/images/arrivalImg3.png';
import ArrivalImg4 from 'assets/images/arrivalImg4.png';

import './style.scss';

const DetailsItem = () => {
  const dataSlider = [
    {
      image: ArrivalImg1,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg2,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg3,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg4,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    }
  ];

  const dataSlider1 = [
    {
      image: ArrivalImg3,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg3,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg3,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    },
    {
      image: ArrivalImg3,
      title: 'HOLLY SHEER BLOUSE IN SAFARI',
      price: '990.000 VND'
    }
  ];

  return (
    <div className='details-container'>
      <Announce />
      <Header className='header white' />
      <div className='details'>
        <div className='grid__3--2'>
          <img src={ArrivalImg3} alt='' />
          <img src={ArrivalImg3} alt='' />
          <img src={ArrivalImg3} alt='' />
          <img src={ArrivalImg3} alt='' />
        </div>
        <Slider data={dataSlider1} className='detail-item__slider' />
        <div className='grid__3--1'>
          <div className='item-infor'>
            <p className='item-type'>New Arrivals</p>
            <h3>Bloom corset top</h3>
            <p className='item-price'>1.200.000 VND</p>
            <p className='item-introduce'>
              A high neck open back mini dress cut in a linen with an
              elasticated waist and back cross over detail. <br />
              Elasticated waist, partially lined.
            </p>
            <div className='select__item'>
              <div className='select__item--size'>
                <h4>Size</h4>
                <p>
                  <span>XS</span>
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                </p>
              </div>
              <div className='select__item--color'>
                <h4>Color</h4>
                <div></div>
              </div>
            </div>
            <div className='btn-add'>
              <DefaultButton className='btn-addToCart'>
                ADD TO CART
              </DefaultButton>
            </div>
            <div className='collapse-item'>
              <Collapse title='PRODUCT DETAILS '>
                Front chest pocket and side pockets <br />
                Fabric-covered snaps at center front <br />
                Removable belt <br />
                Length: 128.9 cm; sleeve length: 81.3 cm
              </Collapse>
              <Collapse title='SIZE & FIT '>
                Find your size:{' '}
                <Link to='size' className='link-item-infor'>
                  SIZING
                </Link>
              </Collapse>
              <Collapse title='SHIPPING & RETURN'>
                Free shipping within Vietnam.
                <br />
                <br />
                Delivery outside of Vietnam: <br />
                • Standard shipping - $20 <br />
                • Express shipping - $30 <br />
                • Free standard shipping on orders over $500 <br />
                <br />
                Easy 14 days returns from delivery date. No return available for
                sale products. <br />
                Read more{' '}
                <Link to='ship' className='link-item-infor'>
                  SHIPPING & RETURNS
                </Link>
              </Collapse>
              <Collapse title='GARMENT CARE'>Dry-clean only</Collapse>
            </div>
          </div>
        </div>
      </div>
      <div className='similar-item'>
        <h3>YOU MAY ALSO LIKE</h3>
        <Slider data={dataSlider} className='similar-item__slider' />
      </div>
      <Footer />
    </div>
  );
};

export default DetailsItem;
