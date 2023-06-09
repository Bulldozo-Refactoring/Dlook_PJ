import React from 'react';
import  ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/test';
import App from './App';
import './style/common.scss';
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);