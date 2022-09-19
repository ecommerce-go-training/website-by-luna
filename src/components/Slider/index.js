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
  const slide = useRef(null);

  const nextSlide = e => {
    e.preventDefault();
    let temp = slide.current.scrollLeft;
    slide.current.scrollLeft += slide.current.offsetWidth;
    if (slide.current.scrollLeft === temp && temp > 0) {
      slide.current.scrollLeft = 0;
    }
  };

  const prevSlide = e => {
    e.preventDefault();

    slide.current.scrollLeft -= slide.current.offsetWidth;
  };
  return (
    <div className='Slider-container'>
      <button className='Slider__button' onClick={prevSlide}>
        <img src={left} alt='arrow left' className='Slider__button--left' />
      </button>
      <div className='Slider' ref={slide}>
        {data.map((obj, index) => {
          return (
            <div key={index} className='Slider__item'>
              <img src={obj.image} className='Slider__item--image' />
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
      <button className='Slider__button' onClick={nextSlide}>
        <img src={right} alt='arrow right' className='Slider__button--right' />
      </button>
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired
};

export default memo(Slider);
