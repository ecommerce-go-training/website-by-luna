import React from 'react';
import axios from 'axios';
// import { api } from 'services/api';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultButton from 'components/Button';
import Announce from 'components/Announcement';
import DefaultCheckbox from 'components/Checkbox';
import DefaultInput from 'components/Input/Default';

import schema from './validate';
import './style.scss';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      await axios
        .post(
          'https://ecommerce-training-staging.herokuapp.com/api/v1/register',
          data
        )
        .then(async () => {
          const response = await axios.post(
            'https://ecommerce-training-staging.herokuapp.com/api/v1/login',
            {
              email: data.email,
              password: data.password
            }
          );
          localStorage.setItem(
            'accessToken',
            JSON.stringify(response.data.data.accessToken)
          );
          localStorage.setItem(
            'userInfo',
            JSON.stringify(response.data.data.userInfo)
          );
          navigate('/');
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // const onSubmit = async data => {
  //   try {
  //     const response = await api.post('/v1/register', data);
  //     if (response.status === 200) {
  //       await api.post('/v1/login', {
  //         email: data.email,
  //         password: data.password
  //       });
  //       navigate('/');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return (
    <div>
      <Announce />
      <Header className='header white' />
      <div className='sign-up'>
        <div className='sign-up__form'>
          <h3>Create an account</h3>
          <p className='please-register'>
            Please register your details below to create an account
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DefaultInput
              name='firstName'
              type='text'
              placeholder='First name'
              className=''
              register={register}
            />
            {errors.firstName && (
              <p className='error'>{errors.firstName.message}</p>
            )}
            <DefaultInput
              name='lastName'
              type='text'
              placeholder='last name'
              className=''
              register={register}
            />
            {errors.lastName && (
              <p className='error'>{errors.lastName.message}</p>
            )}
            <DefaultInput
              name='phoneNumber'
              type='text'
              placeholder='phone'
              className=''
              register={register}
            />
            {errors.phone && <p className='error'>{errors.phone.message}</p>}
            <DefaultInput
              name='email'
              type='text'
              placeholder='email'
              className=''
              register={register}
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
            <DefaultInput
              name='password'
              type='password'
              placeholder='password'
              className=''
              register={register}
            />
            {errors.password && (
              <p className='error'>{errors.password.message}</p>
            )}
            <DefaultCheckbox
              type='checkbox'
              className='sign-up__checkbox'
              value='Sign me up to receive updates on new arrivals, events, promotions and much more!'
              checked={false}
            >
              Sign me up to receive updates on new arrivals, events, promotions
              and much more!
            </DefaultCheckbox>
            <p className='agree-policy'>
              By signing up you agree to Pikameow{' '}
              <Link to='/' className='agree-policy__link'>
                {''}
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to='/' className='agree-policy__link'>
                {''}
                Privacy Policy
              </Link>
            </p>
            <DefaultButton
              type='submit'
              // onClick=
              className=''
            >
              CREATE
            </DefaultButton>
          </form>
        </div>
        <Link to='/' className='have-account'>
          I have an account
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default SignUp;
