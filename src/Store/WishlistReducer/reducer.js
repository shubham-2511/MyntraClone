import { ADD_TO_WISHLIST, GET_ITEMS_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes";


export const wishlistReducer = (state = [], action) => {
    switch( action.type ) {
        case GET_ITEMS_TO_WISHLIST:
            return [...state, ...action.payload];
        case ADD_TO_WISHLIST:
            return [...state]
        case REMOVE_FROM_WISHLIST:
            return [...state]
        default:
            return state;
    }
}      