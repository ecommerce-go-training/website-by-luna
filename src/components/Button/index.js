import React, { memo } from 'react';
// import classNames from 'classnames';

import './style.scss';

function DefaultButton({ type = 'button' }) {
  return (
    <button type={type} className='default-button'>
      SUBMIT
    </button>
  );
}

export default memo(DefaultButton);
