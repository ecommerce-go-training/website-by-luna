import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const DefaultCheckbox = ({ value, className, checked, children }) => {
  const [check, setCheck] = useState(true);

  return (
    <div className='default-checkbox'>
      <label className='default-checkbox__label' htmlFor='Male'>
        <input
          type='checkbox'
          className={classNames(['default-checkbox__input', className])}
          value={value}
          checked={checked}
          onChange={() => setCheck(!check)}
        />
        <p>{children}</p>
        <span className='mark'></span>
      </label>
    </div>
  );
};

DefaultCheckbox.defaultProps = {
  className: '',
  checked: false
};

DefaultCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default DefaultCheckbox;
