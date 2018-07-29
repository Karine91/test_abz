import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import companiesReducer from '../reducers/companies';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            companies: companiesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};