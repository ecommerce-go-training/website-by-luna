import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect, memo } from 'react';

import plus from 'assets/images/icons/plus.svg';
import left from 'assets/images/icons/arrowLeft.svg';
import right from 'assets/images/icons/arrowRight.svg';

import './style.scss';

const Slider = ({ data, className, length }) => {
  const slideItem = useRef(null);

  useEffect(() => {
    const Elementcount = slideItem.current.childNodes.length;
    console.log('slider ', Elementcount);
  });

  console.log(length);
  // if (length === 4) {

  // }

  const nextSlide = e => {
    e.preventDefault();
    let temp = slideItem.current.scrollLeft;
    slideItem.current.scrollLeft += slideItem.current.offsetWidth;
    if (slideItem.current.scrollLeft === temp && temp > 0) {
      slideItem.current.scrollLeft = 0;
    }
  };

  const prevSlide = e => {
    e.preventDefault();

    slideItem.current.scrollLeft -= slideItem.current.offsetWidth;
  };
  return (
    <div className={classNames(['slider-container', className])}>
      <button className='slider__button' onClick={prevSlide}>
        <img src={left} alt='arrow left' className='slider__button--left' />
      </button>
      <div className='slider' ref={slideItem}>
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
};

Slider.defaultProps = {
  className: '',
  length: 4
};

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  length: PropTypes.number
};

export default memo(Slider);
