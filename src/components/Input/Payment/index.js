import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { memo } from 'react';

import './style.scss';

const PaymentInput = ({
  name,
  type,
  placeholder,
  errorStatus = false,
  errorMsg = '',
  className,
  register
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={classNames(['input-payment', className])}
        name={name}
        autoComplete='off'
        {...register(name)}
      />
      {errorStatus ? errorMsg : ''}
    </div>
  );
};

PaymentInput.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  errorStatus: false,
  errorMsg: '',
  className: '',
  register: () => null
};

PaymentInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};

export default memo(PaymentInput);
