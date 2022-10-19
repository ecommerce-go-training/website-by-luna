import React from 'react';
import i18n from 'services/i18n';
import { store } from 'core/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';

import Home from 'pages/Home';
import Brand from 'pages/Brand';
import Signin from 'pages/SignIn';
import Signup from 'pages/SignUp';
import Store from 'pages/StoreStock';
import StoreHCM from 'pages/StoreHCM';
import Winter from 'pages/FallWinter';
import Detail from 'pages/DetailsItem';
import Arrivals from 'pages/NewArrivals';
import FAQ from 'pages/CustomerCare/FAQ';
import Size from 'pages/CustomerCare/Size';
import Policy from 'pages/CustomerCare/Policy';
import Shipping from 'pages/CustomerCare/Shipping';
import Term from 'pages/CustomerCare/TermCondition';
import Garment from 'pages/CustomerCare/GarmentCare';
// import Account from 'pages/Account';

import 'services/i18n';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/faq' element={<FAQ />} />
            <Route exact path='/size' element={<Size />} />
            <Route exact path='/term' element={<Term />} />
            <Route exact path='/brand' element={<Brand />} />
            <Route exact path='/store' element={<Store />} />
            <Route exact path='/sign-in' element={<Signin />} />
            <Route exact path='/sign-up' element={<Signup />} />
            <Route exact path='/ship' element={<Shipping />} />
            <Route exact path='/policy' element={<Policy />} />
            <Route exact path='/detail' element={<Detail />} />
            <Route exact path='/winter' element={<Winter />} />
            <Route exact path='/garment' element={<Garment />} />
            <Route exact path='/arrivals' element={<Arrivals />} />
            <Route exact path='/store/ho-chi-minh' element={<StoreHCM />} />
            {/* <Route exact path='/' element={<Account />} /> */}
          </Routes>
        </I18nextProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
