const initState = {status: false};

export const authReducer = (state = initState, action) => {
    switch(action.type) {
        case "IS_LOGGED_IN":
            return state;
        default:
            return state;
    }
}