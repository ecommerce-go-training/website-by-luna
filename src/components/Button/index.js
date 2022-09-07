import PropTypes from 'prop-types';
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

DefaultButton.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};

export default memo(DefaultButton);
