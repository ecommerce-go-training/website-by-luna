import React, { memo } from 'react';
import classNames from 'classnames';

import './style.scss';

function DefaultButton({ type = 'button', className, onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(['default-button', className])}
    >
      {children}
    </button>
  );
}

export default memo(DefaultButton);
