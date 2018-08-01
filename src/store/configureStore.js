import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import companiesReducer from "../reducers/companies";
import friendsReducer from "../reducers/friends";
import productsReducer from "../reducers/products";
import servicesReducer from "../reducers/services";
import modalStateReducer from "../reducers/modalState";
import enquiryTypeListReducer from "../reducers/enquiryTypeList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      companies: companiesReducer,
      friends: friendsReducer,
      products: productsReducer,
      services: servicesReducer,
      modalState: modalStateReducer,
      enquiryTypeList: enquiryTypeListReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
