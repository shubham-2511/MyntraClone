import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import { cartReducer } from "./CartReducer/reducer";
import { productReducer } from "./Products/reducer";
import { wishlistReducer } from "./WishlistReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  product: productReducer,
  cart: cartReducer,
});
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
console.log(store.getState());
