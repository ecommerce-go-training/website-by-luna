import React, { memo } from 'react';
// import classNames from 'classnames';
// import eye from 'assets/images/icons/eye.png';
// import eyeSlash from 'assets/images/icons/eye-slash.png';

import './style.scss';

function DefaultInput({ type = 'text' }) {
  return (
    <div>
      <input
        type={type}
        placeholder='Confirm password'
        className='default-input'
      />
    </div>
  );
}

export default memo(DefaultInput);
