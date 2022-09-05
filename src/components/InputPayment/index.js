import React, { memo } from 'react';

import './style.scss';

function DefaultInput({ type = 'text' }) {
  return (
    <div>
      <input
        type={type}
        placeholder='Confirm password'
        className='input-payment'
      />
    </div>
  );
}

export default memo(DefaultInput);
