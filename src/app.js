import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainPage from './components/MainPage';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

