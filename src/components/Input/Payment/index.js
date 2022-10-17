import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, memo } from 'react';

import './style.scss';

const PaymentInput = ({
  name,
  type,
  placeholder,
  // errorStatus = false,
  // errorMsg = '',
  className,
  onChange
}) => {
  const [inputValue, setInputValue] = useState('');

  onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(['input-payment', className])}
        name={name}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

PaymentInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

PaymentInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default memo(PaymentInput);
