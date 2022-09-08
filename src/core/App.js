import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Demo from 'pages/Demo/index';
import Form from 'pages/Form/index';
// import Collapse from 'components/Collapse/demo';
import Footer from 'components/Footer/index';

import 'services/i18n';

import 'App.scss';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/demo' element={<Demo />} />
        <Route exact path='/form' element={<Form />} />
        {/* <Route exact path='/' element={<Collapse />} /> */}
        <Route exact path='/' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
