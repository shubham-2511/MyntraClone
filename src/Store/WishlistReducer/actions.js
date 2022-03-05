import axios from "axios";
import { GET_ITEMS_TO_WISHLIST } from "./actionTypes";

export const getItemsToWishlist = ({phone}) => async (dispatch) => {
    // var data = await axios.get("https://tangy-watery-scion.glitch.me/todos4");
    var data = fetch("https://tangy-watery-scion.glitch.me/todos4")
    .then((r) =>{
        return r.json();
    })
    .then((r) =>{
        console.log(r)
    })
    // data = data.data;

    // console.log(data);

    // data = data.filter((item) => item.phone === phone);

    // console.log(data[0].wishlist);

    // dispatch({
    //     type: GET_ITEMS_TO_WISHLIST,
    //     payload: data[0].wishlist
    // })
}

