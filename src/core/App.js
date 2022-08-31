import 'services/i18n';
import { useTranslation, Trans } from 'react-i18next';
import React, { Suspense } from 'react';
import 'App.css';
import 'translations/en/translation';
import 'translations/vi/translation';
import * as dotenv from 'dotenv';
dotenv.config();

function App() {
  const [t, i18n] = useTranslation();
  return (
    <Suspense fallback='loading'>
      <div className='App'>
        <header className='App-header'>
          <h1>{t('text')}</h1>
          <p>
            <Trans>content</Trans>
          </p>
          <button onClick={() => i18n.changeLanguage('en')}>Tiếng Anh</button>
          <button onClick={() => i18n.changeLanguage('vi')}>Tiếng Việt</button>
          <div className='card-body'>
            <p>REACT_APP_SECRET_NAME: {process.env.REACT_APP_SECRET_NAME}</p>
            <p>SECRET_KEY: {process.env.REACT_APP_SECRET_KEY}</p>
            <p>REACT_APP_TOKEN: {process.env.REACT_APP_TOKEN}</p>
          </div>
        </header>
      </div>
    </Suspense>
  );
}

export default App;
