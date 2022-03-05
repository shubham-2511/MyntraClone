import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./actionTypes";

export const getCartLoading = () => ({
  type: GET_CART_LOADING,
});

export const getCartSuccess = (data) => ({
  type: GET_CART_SUCCESS,
  payload: data,
});

export const getCartError = () => ({
  type: GET_CART_ERROR,
});
