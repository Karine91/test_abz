import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import './axious/config';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MainPage />
    </Provider>

    // <Provider store={store}>
    //     <ContactPage />
    // </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

