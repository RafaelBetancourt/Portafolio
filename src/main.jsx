import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './components/Landing';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/app' element={<App />} />
    </Routes>
  </BrowserRouter>
)
