import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const DefaultCheckbox = ({ value, className, children }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className={classNames(['default-checkbox', className])}>
      <label className='default-checkbox__label'>
        <input
          type='checkbox'
          className='default-checkbox__input'
          value={value}
          // checked={checked}
          onClick={() => setCheck(!check)}
        />
        <p>{children}</p>
        <span className='mark'></span>
      </label>
    </div>
  );
};

DefaultCheckbox.defaultProps = {
  className: ''
};

DefaultCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default DefaultCheckbox;
