import React, { useState } from 'react';
import left from 'assets/images/icons/arrowLeft.svg';
import right from 'assets/images/icons/arrowRight.svg';
import image1 from 'assets/images/image1.png';
import image2 from 'assets/images/image2.png';
import image3 from 'assets/images/image3.png';
import image4 from 'assets/images/image4.png';

import './style.scss';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const dataSlider = [image1, image2, image3, image3, image2, image4, image1];
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  return (
    <div className='Slider-container'>
      <div className='Slider'>
        <button className='Slider__button' onClick={prevSlide}>
          <img src={left} alt='arrow left' className='Slider__button--left' />
        </button>
        <div className='Slider__items'>
          {dataSlider.map((obj, index) => {
            return (
              <div key={index} className='Slider__item'>
                <img src={obj} className='Slider__image' />
              </div>
            );
          })}
        </div>
        <button className='Slider__button' onClick={nextSlide}>
          <img
            src={right}
            alt='arrow right'
            className='Slider__button--right'
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
