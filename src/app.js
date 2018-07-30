import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainPage from './components/MainPage';


const axios = require('axios');
const AUTH_TOKEN = "445bdebaee8cedfa8f11a6d5bf999c33573d6973";
axios.defaults.baseURL = 'http://504080.com/api/v1/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

