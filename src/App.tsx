import React from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import ProductPage from './pages/ProductPage/ProductPage';
import OfferPage from './pages/OfferPage/OfferPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RandomFoodyPage from './pages/RandomFoodyPage/RandomFoodyPage';
import HelpPage from './pages/HelpPage/HelpPage';
import ProductsOrderingPage from './pages/ProductsOrderingPage/ProductsOrderingPage';

import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/randomfoody" element={<RandomFoodyPage/>}/>
        <Route path="/offer" element={<OfferPage/>}/>
        <Route path="/offer/:searchvalue" element={<OfferPage/>}/>
        <Route path="/offer/category/:categoryname" element={<OfferPage/>}/>
        <Route path="/about-us" element={<AboutUsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/orderform" element={<ProductsOrderingPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
