import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import companiesReducer from '../reducers/companies';
import friendsReducer from '../reducers/friends';
import productsReducer from '../reducers/products';
import servicesReducer from '../reducers/services';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            companies: companiesReducer,
            friends: friendsReducer,
            products: productsReducer,
            services: servicesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};