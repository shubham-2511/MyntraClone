import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../Reducers/AuthReducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = {
    auth: authReducer
}

export const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
  ));

