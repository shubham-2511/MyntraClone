import axios from "axios";
import { ADD_TO_WISHLIST, GET_ITEMS_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./actionTypes";

export const getItemsToWishlist = () => async (dispatch) => {
    var data = await axios.get("https://tangy-watery-scion.glitch.me/todos4");
    data = data.data;

    console.log(data);

    dispatch({
        type: GET_ITEMS_TO_WISHLIST,
        payload: data
    })
}


export const addToWishlist = (item) => async (dispatch) => {
    var data = await axios.post("https://tangy-watery-scion.glitch.me/todos4", item);
    dispatch({
        type: ADD_TO_WISHLIST,
        payload: item
    })
}

export const removeFromWishlist = (id) => async (dispatch) => {
    var data = await axios.delete("https://tangy-watery-scion.glitch.me/todos4/" + id);

    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: id
    })

}



