import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Signin from 'pages/SignIn/index';
import Form from 'pages/Form/index';
import Home from 'pages/Home/index';
import Store from 'pages/StoreStock/index';
import StoreHCM from 'pages/StoreHCM/index';
import Brand from 'pages/Brand/index';
import FAQ from 'pages/CustomerCare/FAQ/index';
import Size from 'pages/CustomerCare/Size/index';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <Routes>
      <Route exact path='/signin' element={<Signin />} />
      <Route exact path='/form' element={<Form />} />
      <Route exact path='/' element={<Home />} />
      <Route exact path='/store' element={<Store />} />
      <Route exact path='/storehcm' element={<StoreHCM />} />
      <Route exact path='/brand' element={<Brand />} />
      <Route exact path='/faq' element={<FAQ />} />
      <Route exact path='/size' element={<Size />} />
    </Routes>
  );
}

export default App;
