import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
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
        mrp: state.cart.forEach((item) => (item.price.mrp += state.mrp)),
        discountPrice: state.cart.forEach(
          (item) => (item.sp.mrp += state.discountPrice)
        ),
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
