import React from 'react';
import schema from './validate';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultInput from 'components/Input/Default';

import { api } from 'services/api';
import './style.scss';

const SignIn = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'Pages.SignIn'
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = async data => {
    try {
      const response = await api.post('login', data);
      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

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

            <DefaultButton type='submit' className=''>
              {t('submit')}
            </DefaultButton>
          </form>
        </div>
        <div className='reset-create__account'>
          <Link to='/reset-password' className='reset-password'>
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
