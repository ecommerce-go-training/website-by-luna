import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Announce from 'components/Announce';
import classNames from 'classnames';
import Collapse from 'components/Collapse';

import body from 'assets/images/body.svg';

import './style.scss';

function Size() {
  const [pageSize, setPageSize] = useState(1);
  return (
    <div>
      <Announce />
      <Header />
      <div className='size__container'>
        <div className='grid__1--4'>
          <p>
            <Link to='/faq' className='link__page'>
              FAQ
            </Link>
          </p>
          <p>
            <Link to='/size' className='link__page active'>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/ship' className='link__page '>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/term' className='link__page '>
              term & conditions
            </Link>
          </p>
          <p>
            <Link to='/policy' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/garment' className='link__page '>
              garment care
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              make a return
            </Link>
          </p>
        </div>
        <div className='grid__3--4'>
          <div className='size__content'>
            <h4>SIZE GUIDE</h4>
            <p className='size__page'>
              Home /<span> Size guide</span>
            </p>
            <p>
              If your measurements are not consistent with a single column, use
              your waist measurement to determine your ideal size.
            </p>
            <div className='link__size'>
              <button
                className={classNames('link__size--table', {
                  active: pageSize === 1
                })}
                onClick={() => setPageSize(1)}
              >
                Size conversation
              </button>
              <button
                className={classNames('link__size--table', {
                  active: pageSize === 2
                })}
                onClick={() => setPageSize(2)}
              >
                Centimetres
              </button>
              <button
                className={classNames('link__size--table', {
                  active: pageSize === 3
                })}
                onClick={() => setPageSize(3)}
              >
                Inches
              </button>
            </div>
            {pageSize == 1 && (
              <table className='table__size'>
                <tr>
                  <td>our size</td>
                  <td>uk</td>
                  <td>eu</td>
                  <td>us</td>
                </tr>
                <tr>
                  <td>xs</td>
                  <td>6</td>
                  <td>34</td>
                  <td>0-2</td>
                </tr>
                <tr>
                  <td>s</td>
                  <td>8</td>
                  <td>36</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>m</td>
                  <td>10</td>
                  <td>38</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>12</td>
                  <td>40</td>
                  <td>8</td>
                </tr>
              </table>
            )}

            {pageSize == 2 && (
              <table className='table__size'>
                <tr>
                  <td></td>
                  <td>Size xs</td>
                  <td>size s</td>
                  <td>size M</td>
                  <td>size L</td>
                </tr>
                <tr>
                  <td>bust</td>
                  <td>78</td>
                  <td>82</td>
                  <td>86</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>waist</td>
                  <td>60</td>
                  <td>64</td>
                  <td>68</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>hip</td>
                  <td>84</td>
                  <td>88</td>
                  <td>92</td>
                  <td>96</td>
                </tr>
              </table>
            )}

            {pageSize == 3 && (
              <table className='table__size'>
                <tr>
                  <td></td>
                  <td>Size xs</td>
                  <td>size s</td>
                  <td>size M</td>
                  <td>size L</td>
                </tr>
                <tr>
                  <td>bust</td>
                  <td>30.7</td>
                  <td>32.3</td>
                  <td>33.9</td>
                  <td>35.4</td>
                </tr>
                <tr>
                  <td>waist</td>
                  <td>23.6</td>
                  <td>25.2</td>
                  <td>26.8</td>
                  <td>28.3</td>
                </tr>
                <tr>
                  <td>hip</td>
                  <td>33.1</td>
                  <td>34.6</td>
                  <td>36.2</td>
                  <td>37.8</td>
                </tr>
              </table>
            )}
            <div className='size__content--noti'>
              <p>
                <b>BUST</b>
                <br />
                Measure around the fullest part of your chest, keeping the tape
                level to the floor
              </p>
              <p>
                <b>WAIST</b>
                <br />
                Measure around your natural waistline (the smallest part of your
                waist)
              </p>
              <p>
                <b>HIPS</b>
                <br />
                Measure aroud the fullest part of your hips. Slim-hipped ladies
                can take this measurement from 20cm/8in below the waistline
              </p>
            </div>
            {/* <Collapse title='HAHA' className={'collapse-siz'}>
              <p>
                Registered Business: Pika meow <br />
                Registered in Ho Chi Minh , Vietnam <br />
                Registered Address: 19B Le Thi Rieng, District 1, HCMC, Vietnam
                <br />
                Registered Business Number: 41A8046023. <br />
                Tax Registration Number: 8432006613
              </p>
            </Collapse> */}
            <Collapse
              title='ABOUT BUST, WAIST, HIPS'
              className={'collapse-size'}
            >
              <img className='img-body' src={body} alt='' />
              <p>
                <b>BUST</b>
                <br />
                Measure around the fullest part of your chest, keeping the tape
                level to the floor
              </p>
              <p>
                <b>WAIST</b>
                <br />
                Measure around your natural waistline (the smallest part of your
                waist)
              </p>
              <p>
                <b>HIPS</b>
                <br />
                Measure aroud the fullest part of your hips. Slim-hipped ladies
                can take this measurement from 20cm/8in below the waistline
              </p>
            </Collapse>
          </div>
          <div className='size__image'>
            <img src={body} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Size;
