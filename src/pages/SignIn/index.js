import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Default';

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

  const onSubmit = data => console.log('data', data);
  console.log('errors', errors);
  return (
    <div className='sign-in'>
      <Announce />
      <Header className='header white' />
      <div className='sign-in'>
        <div className='sign-in__form'>
          <h3>{t('login')}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DefaultInput
              name='email'
              type='text'
              placeholder='email'
              className=''
              errorMsg='Email invalid'
              register={register}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
            <DefaultInput
              name='password'
              type='password'
              placeholder={t('password')}
              className=''
              errorMsg='Password invalid'
              register={register}
            />
            {errors.password && (
              <p className='error'>{errors.password.message}</p>
            )}

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
          <Link to='/sign-up' className='create__account'>
            {t('signup')}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
