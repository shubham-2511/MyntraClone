import {
  GET_JEANS_DISCOUNT,
  GET_JEANS_FILTERED,
  GET_JEANS_SUCESS,
  GET_KURTI_DISCOUNT,
  GET_KURTI_FILTERED,
  GET_KURTI_SUCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_SHIRTS_DISCOUNT,
  GET_SHIRTS_FILTERED,
  GET_SHIRTS_SUCESS,
  GET_TOPS_DISCOUNT,
  GET_TOPS_FILTERED,
  GET_TOPS_SUCESS,
} from "./actionTypes";

export const getProductLoading = () => ({
  type: GET_PRODUCT_LOADING,
});
export const getKurtiSucess = (data) => ({
  type: GET_KURTI_SUCESS,
  payload: data,
});
export const getJeansSucess = (data) => ({
  type: GET_JEANS_SUCESS,
  payload: data,
});
export const getTopsSucess = (data) => ({
  type: GET_TOPS_SUCESS,
  payload: data,
});
export const getShirtsSucess = (data) => ({
  type: GET_SHIRTS_SUCESS,
  payload: data,
});

export const getProductError = () => ({
  type: GET_PRODUCT_ERROR,
});

export const getKurtiDiscount = (data) => ({
  type: GET_KURTI_DISCOUNT,
  payload: data,
});
export const getKurtiFiltered = (data) => ({
  type: GET_KURTI_FILTERED,
  payload: data,
});
export const getTopsDiscount = (data) => ({
  type: GET_TOPS_DISCOUNT,
  payload: data,
});
export const getTopsFiltered = (data) => ({
  type: GET_TOPS_FILTERED,
  payload: data,
});

export const getJeansDiscount = (data) => ({
  type: GET_JEANS_DISCOUNT,
  payload: data,
});
export const getJeansFiltered = (data) => ({
  type: GET_JEANS_FILTERED,
  payload: data,
});

export const getShirtsDiscount = (data) => ({
  type: GET_SHIRTS_DISCOUNT,
  payload: data,
});
export const getShirtsFiltered = (data) => ({
  type: GET_SHIRTS_FILTERED,
  payload: data,
});
