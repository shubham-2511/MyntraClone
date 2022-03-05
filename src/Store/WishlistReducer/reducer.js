import { GET_ITEMS_TO_WISHLIST } from "./actionTypes";


export const wishlistReducer = (state = [], action) => {
    switch( action.type ) {
        case GET_ITEMS_TO_WISHLIST:
            return [...state, ...action.payload];
        default:
            return state;
    }
}      