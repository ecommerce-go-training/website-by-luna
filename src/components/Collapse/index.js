import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, memo } from 'react';

import PlusIcon from 'assets/images/icons/plus.svg';
import MinusIcon from 'assets/images/icons/minus.svg';

import './style.scss';

const Collapse = ({ title, className, children }) => {
  const [openContent, setOPencontent] = useState(false);

  const handleOpenContent = () => {
    setOPencontent(!openContent);
  };

  console.log(handleOpenContent);

  return (
    <div>
      <div className={classNames(['collapse', className])}>
        <button onClick={handleOpenContent} className='collapse__button'>
          {!openContent ? (
            <img
              src={PlusIcon}
              alt='extend'
              className='collapse__button--plus'
            />
          ) : (
            <img
              src={MinusIcon}
              alt='collapse'
              className='collapse__button--minus'
            />
          )}
        </button>
        <p className='collapse__title'>{title}</p>
      </div>
      <div className='collapse__content'>
        <div>{openContent && <div className='content'>{children}</div>}</div>
      </div>
    </div>
  );
};

Collapse.defaultProps = {
  className: ''
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default memo(Collapse);
