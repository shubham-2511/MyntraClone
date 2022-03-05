import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM,
} from "./actionTypes";

const init = {
  loading: false,
  error: false,
  cart: [],
  mrp: 0,
  discountPrice: 0,
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    }
    default: {
      return state;
    }
  }
};