import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Demo from 'pages/Demo/index';
import Form from 'pages/Form/index';
// import Header from 'components/Header/index';
import Signin from 'pages/SignIn/index';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <Routes>
      <Route exact path='/demo' element={<Demo />} />
      <Route exact path='/form' element={<Form />} />
      <Route exact path='/' element={<Signin />} />
    </Routes>
  );
}

export default App;
