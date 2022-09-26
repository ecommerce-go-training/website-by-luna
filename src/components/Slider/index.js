import PropTypes from 'prop-types';
import React, { useRef, memo } from 'react';

import left from 'assets/images/icons/arrowLeft.svg';
import right from 'assets/images/icons/arrowRight.svg';
// import image1 from 'assets/images/image1.png';
// import image2 from 'assets/images/image2.png';
// import image3 from 'assets/images/image3.png';
// import image4 from 'assets/images/image4.png';
import plus from 'assets/images/plus.svg';

import './style.scss';

// const dataSlider = [
//   {
//     image: image1,
//     title: 'NEW IN DRESSES',
//     price: '990.000 VND'
//   },
//   {
//     image: image2,
//     title: 'NEW IN TOP',
//     price: '990.000 VND'
//   },
//   {
//     image: image3,
//     title: 'NEW IN SHORTS',
//     price: '990.000 VND'
//   },
//   {
//     image: image4,
//     title: 'NEW IN JEANS',
//     price: '990.000 VND'
//   },
//   {
//     image: image2,
//     title: 'NEW IN TOP',
//     price: '990.000 VND'
//   },
//   {
//     image: image3,
//     title: 'NEW IN SHORTS',
//     price: '990.000 VND'
//   },
//   {
//     image: image1,
//     title: 'NEW IN DRESSES',
//     price: '990.000 VND'
//   },
//   {
//     image: image4,
//     title: 'NEW IN JEANS',
//     price: '990.000 VND'
//   },
//   {
//     image: image2,
//     title: 'NEW IN TOP',
//     price: '990.000 VND'
//   },
//   {
//     image: image3,
//     title: 'NEW IN SHORTS',
//     price: '990.000 VND'
//   },
//   {
//     image: image4,
//     title: 'NEW IN JEANS',
//     price: '990.000 VND'
//   },
//   {
//     image: image1,
//     title: 'NEW IN DRESSES',
//     price: '990.000 VND'
//   }
// ];

function Slider({ data }) {
  // data = dataSlider;
  const slideitem = useRef(null);

  const nextSlide = e => {
    e.preventDefault();
    let temp = slideitem.current.scrollLeft;
    slideitem.current.scrollLeft += slideitem.current.offsetWidth;
    if (slideitem.current.scrollLeft === temp && temp > 0) {
      slideitem.current.scrollLeft = 0;
    }
  };

  const prevSlide = e => {
    e.preventDefault();

    slideitem.current.scrollLeft -= slideitem.current.offsetWidth;
  };
  return (
    <div className='slider-container'>
      <button className='slider__button' onClick={prevSlide}>
        <img src={left} alt='arrow left' className='slider__button--left' />
      </button>
      <div className='slider' ref={slideitem}>
        {data.map((obj, index) => {
          return (
            <div key={index} className='slider__items'>
              <div className='slider__items--item'>
                <img src={obj.image} className='slider__item--image' />
              </div>
              <div className='image-content'>
                <img src={plus} alt='icon plus' className='icon__view-detail' />
                <p>XEM CHI TIẾT</p>
              </div>
              <p>{obj.title}</p>
              <p>{obj.price}</p>
            </div>
          );
        })}
      </div>
      <button className='slider__button' onClick={nextSlide}>
        <img src={right} alt='arrow right' className='slider__button--right' />
      </button>
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired
};

export default memo(Slider);
