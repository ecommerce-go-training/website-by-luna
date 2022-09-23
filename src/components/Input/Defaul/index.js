import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, memo } from 'react';

import eye from 'assets/images/icons/eye.png';
import eyeSlash from 'assets/images/icons/eye-slash.png';

import './style.scss';

function DefaultInput({
  name,
  type,
  placeholder,
  // errorStatus = false,
  // errorMsg = '',
  className,
  onChange
}) {
  const [inputValue, setInputValue] = useState('');
  // const passwordInput = name?.toLowerCase()?.includes('password');
  const [isShow, setIsShow] = useState(false);
  const [typeInput, setTypeInput] = useState(type);

  const togglePassword = () => {
    setIsShow(isShow => !isShow);
  };

  onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className='input-com'>
      <input
        type={typeInput}
        placeholder={placeholder}
        className={classNames(['default-input', className])}
        name={name}
        value={inputValue}
        onChange={onChange}
        autoComplete='off'
      />
      <label className='input__label' data-content='Email'>
        <span>{placeholder}</span>
      </label>
      <button
        style={{ display: type === 'password' ? 'block' : 'none' }}
        type='button'
        className='default-input__show'
        onClick={togglePassword}
      >
        {!isShow ? (
          <img
            src={eyeSlash}
            alt='show password'
            className='default-input__show--icon'
            onClick={() => setTypeInput('text')}
          />
        ) : (
          <img
            src={eye}
            alt='hidden password'
            className='default-input__show--icon'
            onClick={() => setTypeInput('password')}
          />
        )}
      </button>
      <p
        className={classNames([
          'default-input__error'
          // { active: errorStatus }
        ])}
      ></p>
    </div>
  );
}

DefaultInput.defaultProps = {
  type: 'text',
  placeholder: ''
};

DefaultInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  placeholder: PropTypes.string,
  errorStatus: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  className: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default memo(DefaultInput);
