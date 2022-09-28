import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';
import DefaultButton from 'components/Button';

import plus from 'assets/images/plus.png';
import Select from 'assets/images/icons/select.svg';
import ArrivalImg1 from 'assets/images/arrivalImg1.png';
import ArrivalImg2 from 'assets/images/arrivalImg2.png';
import ArrivalImg3 from 'assets/images/arrivalImg3.png';
import ArrivalImg4 from 'assets/images/arrivalImg4.png';

import './style.scss';

function NewArrivals() {
  const [click, setClick] = useState(false);

  const dataSize1 = [
    { item: 'FREESIZE', state: false },
    { item: 'XS', state: false },
    { item: 'S', state: false }
  ];
  const [dataSize2, setDatasize2] = useState([
    { item: 'M', state: false },
    { item: 'L', state: false },
    { item: 'XL', state: false }
  ]);
  const dataColor1 = [
    'BEIGE',
    'BLUE',
    'BLACK',
    'BROWN',
    'GREEN',
    'RED',
    'METALLIC'
  ];

  const dataColor2 = [
    'WHITE',
    'CREAM',
    'PINK',
    'ORANGE',
    'YELLOW',
    'LILAC',
    'FLORAL'
  ];

  const toggle = () => {
    setClick(click => !click);
  };

  const handleChanging = index => {
    let temp = dataSize2;
    temp[index].state = !temp[index].state;
    setDatasize2(temp);
  };

  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='arrivals-container'>
        <div className='grid__4--1'>
          <div className='categories-item'>
            <p className='title'>CATEGORIES</p>
            <p>
              <Link to='/' className='link__page active'>
                New Arrivals
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                Back in top
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                Dresses
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                Tops
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                skirts
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                shorts
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                pants
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                jackets
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                jumpsuits
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                Two piece sets
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page '>
                sale
              </Link>
            </p>
          </div>
          <div className='collections'>
            <p className='title'>COLLECTION</p>
            <p>
              <Link to='/' className='link__page'>
                ESSENTIALS EDIT
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page'>
                SPRING SUMMER 2022
              </Link>
            </p>
            <p>
              <Link to='/' className='link__page'>
                FALL WINTER 2021
              </Link>
            </p>
          </div>
          <div className='filter'>
            <p className='title'>FILTER</p>
            <div className='filter__item'>
              <Collapse title='COLOR' className={'collapse-filter'}>
                <div className='filter__select'>
                  <div className='filter__select--item'>
                    {dataColor1.map((obj, index) => {
                      return (
                        <div className='item__color' key={index}>
                          <span onClick={toggle}>
                            <img
                              key={index}
                              style={{
                                display: click === true ? 'block' : 'none'
                              }}
                              src={Select}
                              alt=''
                            />
                            {obj}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className='filter__select--item'>
                    {dataColor2.map((obj, index) => {
                      return (
                        <div className='item__color' key={index}>
                          <span onClick={toggle}>
                            <img
                              key={index}
                              style={{
                                display: click === true ? 'block' : 'none'
                              }}
                              src={Select}
                              alt=''
                            />
                            {obj}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Collapse>
              <Collapse title='SIZE' className={'collapse-filter'}>
                <div className='filter__select'>
                  <div className='filter__select--item'>
                    {dataSize1.map((obj, index) => {
                      return (
                        <div className='item__size' key={index}>
                          <span onClick={toggle}>
                            <img
                              key={index}
                              style={{
                                display: click === true ? 'block' : 'none'
                              }}
                              src={Select}
                              alt=''
                            />
                            {obj.item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className='filter__select--item'>
                    {dataSize2.map((obj, index) => {
                      return (
                        <div className='item__size' key={index}>
                          <span
                            onClick={() => {
                              handleChanging(index);
                              console.log(dataSize2);
                            }}
                          >
                            <img
                              key={index}
                              style={{
                                display:
                                  dataSize2[index].state === true
                                    ? 'block'
                                    : 'none'
                              }}
                              src={Select}
                              alt=''
                            />
                            {obj.item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Collapse>
              <div className='filter-submit'>
                <p>CLEAR FILTERS</p>
                <DefaultButton>APPLY</DefaultButton>
              </div>
            </div>
          </div>
          <div className='sort'>
            <p className='title'>SORT</p>
            <div>
              <p className='active'>NEWEST IN</p>
              <p>BEST SELLERS</p>
              <p>PRICE HIGHEST</p>
              <p>PRICE LOWEST</p>
            </div>
          </div>
        </div>
        <div className='grid__4--3'>
          <div className='grid__image'>
            <div className='image-item'>
              <img src={ArrivalImg1} alt='' />
              <div className='quick-add-size'>
                <img src={plus} alt='' />
                <p>QUICK ADD: </p>
                <p>XS</p>
                <p className='out-stock'>S</p>
                <p className='active'>M</p>
                <p className='out-stock'>L</p>
              </div>
            </div>
            <div className='image-item'>
              <img src={ArrivalImg2} alt='' />
              <div className='quick-add-size'>
                <img src={plus} alt='' />
                <p>QUICK ADD: </p>
                <p>XS</p>
                <p className='out-stock'>S</p>
                <p className='active'>M</p>
                <p className='out-stock'>L</p>
              </div>
            </div>
          </div>
          <div className='grid__image'>
            <div className='image-item'>
              <img src={ArrivalImg3} alt='' />
              <div className='quick-add-size'>
                <img src={plus} alt='' />
                <p>QUICK ADD: </p>
                <p>XS</p>
                <p className='out-stock'>S</p>
                <p className='active'>M</p>
                <p className='out-stock'>L</p>
              </div>
            </div>
            <div className='image-item'>
              <img src={ArrivalImg4} alt='' />
              <div className='quick-add-size'>
                <img src={plus} alt='' />
                <p>QUICK ADD: </p>
                <p>XS</p>
                <p className='out-stock'>S</p>
                <p className='active'>M</p>
                <p className='out-stock'>L</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewArrivals;
