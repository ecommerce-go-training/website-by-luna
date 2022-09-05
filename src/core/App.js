import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Demo from 'pages/Demo/index';
import Form from 'pages/Form/index';
import Redux from 'pages/Redux/Counter';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Demo />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/redux' element={<Redux />} />
      </Routes>
    </div>
  );
}

export default App;
