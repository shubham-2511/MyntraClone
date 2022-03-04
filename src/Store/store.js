import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../Reducers/AuthReducer/reducer';
import { wishlistReducer } from '../Reducers/WishlistReducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    wishlist: wishlistReducer
}
)
export const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
  ));

