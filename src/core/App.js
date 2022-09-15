import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Signin from 'pages/SignIn/index';
import Form from 'pages/Form/index';
import Home from 'pages/Home/index';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <Routes>
      <Route exact path='/signin' element={<Signin />} />
      <Route exact path='/form' element={<Form />} />
      <Route exact path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
