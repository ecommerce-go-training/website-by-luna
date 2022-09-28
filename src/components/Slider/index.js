import PropTypes from 'prop-types';
import React, { useRef, memo } from 'react';

import left from 'assets/images/icons/arrowLeft.svg';
import right from 'assets/images/icons/arrowRight.svg';
import plus from 'assets/images/plus.svg';

import './style.scss';

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
