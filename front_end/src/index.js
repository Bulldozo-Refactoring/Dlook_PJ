import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/common.css';
import './style/style.css'
import { BrowserRouter} from 'react-router-dom'; // router

const wrap = ReactDOM.createRoot(document.getElementById('wrap'));
wrap.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);