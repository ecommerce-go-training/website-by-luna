import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announce';
import Slider from 'components/Slider';
import image1 from 'assets/images/image1.png';
import image2 from 'assets/images/image2.png';
import image3 from 'assets/images/image3.png';
import image4 from 'assets/images/image4.png';
import background from 'assets/images/background.png';

import './style.scss';

const dataSlider = [
  image1,
  image2,
  image3,
  image4,
  image2,
  image4,
  image1,
  image3,
  image4,
  image3,
  image1,
  image2
];

function ChangeSuccess() {
  return (
    <div>
      <Announce />
      <Header className='header' />
      <div className='home-container'>
        <img src={background} alt='background' />
        <div className='introduce-infor'>
          <h3>`JOSÉ AURA`</h3>
          <p className='introduce'>
            The Resort 2021 collection is a love letter to our youth. Discover
            the beauty of blooming flowers under the blue sky and sunny
          </p>
          <Link to='/' className='invite-collection'>
            Explore the collection
          </Link>
        </div>
        <div className='grid'>
          <div className='grid__4--2'>
            <Link to='/' className='type-item'>
              Shop new arrivals
            </Link>
            <Link to='/' className='type-item'>
              Shop best seller
            </Link>
          </div>
          <Slider data={dataSlider} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangeSuccess;
