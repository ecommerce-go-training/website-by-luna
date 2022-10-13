import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Defaul';

import schema from './validate';
import './style.scss';

const SignIn = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.SignIn'
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className='sign-in'>
      <Announce />
      <Header className='header white' />
      <div className='sign-in'>
        <div className='sign-in__form'>
          <h3>{t('login')}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DefaultInput
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              name='user'
              type='text'
              placeholder='email'
              className=''
              onChange
            />
            <DefaultInput
              {...register('password', {
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/
              })}
              name='password'
              type='password'
              placeholder={t('password')}
              className=''
              onChange
            />
            <DefaultButton
              type='submit'
              // onClick=
              className=''
            >
              {t('submit')}
            </DefaultButton>
          </form>
        </div>
        <div className='reset-create__account'>
          <Link to='/' className='reset-password'>
            {t('forgot')}
          </Link>
          <Link to='/signup' className='create__account'>
            {t('signup')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
