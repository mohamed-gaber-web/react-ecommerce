import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';

import axios from 'axios';

// * Url global
axios.defaults.baseURL = 'https://dev-ecommerce-api.sdex.online/'; 

import {
  BrowserRouter,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


