import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announcement';
import Collapse from 'components/Collapse';
import DefaultButton from 'components/Button';

import plus from 'assets/images/plus.png';
import Select from 'assets/images/icons/select.svg';
import ArrivalImg1 from 'assets/images/arrivalImg1.png';
// import ArrivalImg2 from 'assets/images/arrivalImg2.png';
// import ArrivalImg3 from 'assets/images/arrivalImg3.png';
// import ArrivalImg4 from 'assets/images/arrivalImg4.png';

import './style.scss';

const NewArrivals = () => {
  const dataColor = [
    {
      value: 'BEIGE',
      status: false
    },
    {
      value: 'WHITE',
      status: false
    },
    {
      value: 'BLUE',
      status: false
    },
    {
      value: 'CREAM',
      status: false
    },
    {
      value: 'BLACK',
      status: false
    },
    {
      value: 'PINK',
      status: false
    },
    {
      value: 'BROWN',
      status: false
    },
    {
      value: 'ORANGE',
      status: false
    },
    {
      value: 'GREEN',
      status: false
    },
    {
      value: 'YELLOW',
      status: false
    },
    {
      value: 'RED',
      status: false
    },
    {
      value: 'LILAC',
      status: false
    },
    {
      value: 'METALLIC',
      status: false
    },
    {
      value: 'FLORAL',
      status: false
    }
  ];

  const dataSize = [
    { item: 'FREESIZE', state: false },
    { item: 'M', state: false },
    { item: 'XS', state: false },
    { item: 'L', state: false },
    { item: 'S', state: false },
    { item: 'XL', state: false }
  ];

  const [selectedColor, setSelectedColor] = useState(dataColor);
  const [selectedSize, setSelectedSize] = useState(dataSize);

  function handleShowSelectedColor(index) {
    const newStatus = selectedColor.map((item, i) => {
      if (i === index) {
        item.status = !item.status;
        return item;
      } else {
        return item;
      }
    });
    setSelectedColor(newStatus);
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://ecommerce-training-staging.herokuapp.com/api/v1/products?fbclid=IwAR3znPxcssARiWNCXerlrGPI-8-UE7_lsuSvjWVpmtz20sNqLPqj8t1LRYg'
      );
      setData(response.data);
      console.log(data);
    };
    getData();
  }, [data]);

  const navigate = useNavigate();

  const redirectDetail = () => {
    navigate('/detail');
  };

  function handleShowSelectedSize(index) {
    const newState = selectedSize.map((obj, i) => {
      if (i === index) {
        obj.state = !obj.state;
        return obj;
      } else {
        return obj;
      }
    });
    setSelectedSize(newState);
  }

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
                    {selectedColor.map((obj, index) => {
                      return (
                        <div className='item__color' key={index}>
                          <span
                            onClick={() => {
                              handleShowSelectedColor(index);
                            }}
                          >
                            <img
                              style={{
                                display: obj.status === true ? 'block' : 'none'
                              }}
                              src={Select}
                              alt=''
                            />
                            {obj.value}
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
                    {selectedSize.map((obj, index) => {
                      return (
                        <div className='item__size' key={index}>
                          <span
                            onClick={() => {
                              handleShowSelectedSize(index);
                            }}
                          >
                            <img
                              style={{
                                display: obj.state === true ? 'block' : 'none'
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
            {data &&
              data.data.map(item => {
                console.log(
                  'item',
                  item,
                  data.data.map(item => item)
                );
                return (
                  <div
                    className='image-item'
                    onClick={redirectDetail}
                    key={item.id}
                  >
                    <img src={ArrivalImg1} alt='' />
                    <div className='quick-add-size'>
                      <img src={plus} alt='' />
                      <p>QUICK ADD: </p>
                      <p>XS</p>
                      <p className='out-stock'>S</p>
                      <p className='active'>M</p>
                      <p className='out-stock'>L</p>
                    </div>
                    <div className='item-infor'>
                      <p>
                        {item.name}
                        <br />
                        <span>NEW ARRIVALS</span>
                      </p>
                      <p>item price</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewArrivals;
