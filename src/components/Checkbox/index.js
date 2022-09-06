import React from 'react';
import classNames from 'classnames';

import './style.scss';

function DefaultCheckbox({
  value,
  className,
  checked,
  children = 'Bạn muốn đi nhậu không'
}) {
  return (
    <div>
      <label className='checkBox'>
        <input
          type='checkbox'
          className={classNames(['default-checkbox', className])}
          value={value}
          checked={checked}
        />
        {children}
      </label>
    </div>
  );
}

export default DefaultCheckbox;
