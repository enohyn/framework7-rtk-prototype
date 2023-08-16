import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import { Provider } from 'react-redux';

import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';


import App from './App';
import store from './redux/store'

Framework7.use(Framework7React);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

