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

const init = {
  loading: false,
  error: false,
  kurti: [],
  tops: [],
  shirt: [],
  jeans: [],
};
export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_KURTI_SUCESS: {
      return {
        ...state,
        loading: false,
        kurti: payload,
      };
    }
    case GET_KURTI_DISCOUNT: {
      return {
        ...state,
        loading: false,
        kurti: payload,
      };
    }
    case GET_KURTI_FILTERED: {
      return {
        ...state,
        loading: false,
        kurti: payload,
      };
    }
    case GET_JEANS_SUCESS: {
      return {
        ...state,
        loading: false,
        jeans: payload,
      };
    }
    case GET_JEANS_DISCOUNT: {
      return {
        ...state,
        loading: false,
        jeans: payload,
      };
    }
    case GET_JEANS_FILTERED: {
      return {
        ...state,
        loading: false,
        jeans: payload,
      };
    }
    case GET_SHIRTS_SUCESS: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }
    case GET_SHIRTS_DISCOUNT: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }
    case GET_SHIRTS_FILTERED: {
      return {
        ...state,
        loading: false,
        shirt: payload,
      };
    }
    case GET_TOPS_SUCESS: {
      return {
        ...state,
        loading: false,
        tops: payload,
      };
    }
    case GET_TOPS_DISCOUNT: {
      return {
        ...state,
        loading: false,
        tops: payload,
      };
    }
    case GET_TOPS_FILTERED: {
      return {
        ...state,
        loading: false,
        tops: payload,
      };
    }
    case GET_PRODUCT_ERROR: {
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
