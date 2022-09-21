import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Announce from 'components/Announce';
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
            <Link to='/' className='link__page active'>
              sizing
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              shipping & returns
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              term & conditions
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
              privacy policy
            </Link>
          </p>
          <p>
            <Link to='/' className='link__page '>
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
            <p>
              If your measurements are not consistent with a single column, use
              your waist measurement to determine your ideal size.
            </p>
            <div className='link__size'>
              <button
                className={
                  pageSize === 1
                    ? 'link__size--table active'
                    : 'link__size--table'
                }
                onClick={() => setPageSize(1)}
              >
                Size conversation
              </button>
              <button
                className={
                  pageSize === 2
                    ? 'link__size--table active'
                    : 'link__size--table'
                }
                onClick={() => setPageSize(1)}
              >
                Centimetres
              </button>
              <button
                className={
                  pageSize === 3
                    ? 'link__size--table active'
                    : 'link__size--table'
                }
                onClick={() => setPageSize(1)}
              >
                Inches
              </button>
            </div>
            {pageSize == 1 && (
              <table className='table__siz'>
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
              <table className='table__siz'>
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
