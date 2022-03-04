

export const authReducer = (state = {status: false}, action) => {
    switch(action.type) {
        case "IS_LOGGED_IN":
            return state;
        default:
            return state;
    }
}