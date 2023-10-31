import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import Services from './views/Services';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts /> } />
      <Route path='/news' element={<News /> } />
      <Route path='/services' element={<Services /> } />
      <Route path='/newsDetails' element={<NewsDetails /> } />
      <Route path='*' element={<NotFound /> } />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);