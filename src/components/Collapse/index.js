import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';

import plus from 'assets/images/plus.png';
import minus from 'assets/images/minus.svg';

import './style.scss';

function Collapse({ title, children }) {
  const [open, setOPen] = useState(false);
  const handleOpening = () => {
    setOPen(prev => !prev);
  };
  return (
    <div>
      <div className='collapse'>
        <button onClick={handleOpening} className='collapse__button'>
          {!open ? (
            <img src={plus} alt='extend' className='collapse__button--plus' />
          ) : (
            <img
              src={minus}
              alt='collapse'
              className='collapse__button--minus'
            />
          )}
        </button>
        <p className='collapse__title'>{title}</p>
      </div>
      <div className='collapse__content'>
        <div>{open && <div className='p-3'>{children}</div>}</div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default memo(Collapse);
