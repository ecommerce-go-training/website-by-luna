import PropTypes from 'prop-types';
import React, { memo } from 'react';
import classNames from 'classnames';

import './style.scss';

const DefaultButton = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(['default-button', className])}
    >
      {children}
    </button>
  );
};

DefaultButton.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => null
};

DefaultButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default memo(DefaultButton);
