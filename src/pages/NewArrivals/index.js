import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Announce from 'components/Announce';
import Collapse from 'components/Collapse';
// import DefaultButton from 'components/Button';

import ArrivalImg1 from 'assets/images/arrivalImg1.png';
import ArrivalImg2 from 'assets/images/arrivalImg2.png';
import ArrivalImg3 from 'assets/images/arrivalImg3.png';
import ArrivalImg4 from 'assets/images/arrivalImg4.png';
import Select from 'assets/images/icons/select.svg';

import './style.scss';

function NewArrivals() {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(click => !click);
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
              <Collapse title='COLOR' className={'collapse-filter'}></Collapse>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>BEIGE</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>WHITE</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>BLUE</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>CREAM</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>BLACK</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>PINK</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>BROWN</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>ORANGE</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>GREEN</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>YELLOW</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>RED</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>LILAC</span>
                </div>
              </div>
              <div className='filter__item--color'>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>METALLIC</span>
                </div>
                <div className='item__color'>
                  <img
                    style={{ display: click === true ? 'flex' : 'none' }}
                    src={Select}
                    alt=''
                  />
                  <span onClick={toggle}>FROLAL</span>
                </div>
              </div>
              <Collapse title='SIZE' className={'collapse-filter'}></Collapse>
            </div>
          </div>
        </div>
        <div className='grid__4--3'>
          <div className='grid__image'>
            <img src={ArrivalImg1} alt='' />
            <img src={ArrivalImg2} alt='' />
          </div>
          <div className='grid__image'>
            <img src={ArrivalImg3} alt='' />
            <img src={ArrivalImg4} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewArrivals;
