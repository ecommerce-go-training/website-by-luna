/* eslint-disable no-unused-vars */
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import React, { Suspense, useState } from 'react';
import DefaultInput from 'components/Input/index';
import { useTranslation, Trans } from 'react-i18next';

import 'services/i18n';

import 'App.scss';
// import Demo from 'pages/Demo/index';

function Demo() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  const [t, i18n] = useTranslation();
  const [selectedOpt, setSelectedOpt] = useState();
  axios({
    method: 'get',
    url: 'https://reactjs.org/',
    responseType: 'json'
  }).then(function (response) {
    console.log('demo axios', response.status);
  });
  const dateFormat = format(new Date(), 'dd/MM/yyyy');

  const dateFormatVietNam = format(new Date(), 'PPPP', { locale: vi });

  return (
    <Suspense fallback='loading'>
      <div className='App'>
        <header className='App-header'>
          <Select
            className='demo-select'
            value={selectedOpt}
            onChange={setSelectedOpt}
            options={options}
            isMulti
          />
          <h1>{t('text')}</h1>
          <p>{dateFormat}</p>
          <p>{dateFormatVietNam}</p>
          <p>
            <Trans>content</Trans>
          </p>
          <button onClick={() => i18n.changeLanguage('en')}>Tiếng Anh</button>
          <button onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</button>
          <div className='card-body'>
            <p>REACT_APP_SECRET_NAME: {process.env.REACT_APP_SECRET_NAME}</p>
            <p>SECRET_KEY: {process.env.REACT_APP_SECRET_KEY}</p>
            <Link to='/form'>Form Demo</Link>
            <Link to='/redux'>Redux Demo</Link>
          </div>
          <DefaultInput
            name='password'
            type='password'
            errorStatus={false}
            errorMsg=''
            value=''
            className=''
            onChange=''
            onKeyDown=''
          />
        </header>
      </div>
    </Suspense>
  );
}

export default Demo;
