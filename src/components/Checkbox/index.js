import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

function DefaultCheckbox({ value, className, checked, children }) {
  return (
    <div>
      <label className='default-checkbox'>
        <input
          type='checkbox'
          className={classNames(['default-checkbox__input', className])}
          value={value}
          checked={checked}
        />
        <p>{children}</p>
        <span className='mark'></span>
      </label>
    </div>
  );
}

DefaultCheckbox.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

export default DefaultCheckbox;
