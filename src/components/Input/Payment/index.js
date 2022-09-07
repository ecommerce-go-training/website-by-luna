import PropTypes from 'prop-types';
import React, { memo } from 'react';

import './style.scss';

function PaymentInput({ type = 'text' }) {
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

PaymentInput.propTypes = {
  type: PropTypes.string.isRequired
};

export default memo(PaymentInput);
