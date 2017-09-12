const global = (state = {
    loggedIn: false,
    user: ""
}, action) => {
    switch(action.type){
        case "GLOBAL_UPDATE_LOGGED_IN":
            return Object.assign({}, state, {loggedIn: action.value, user: action.user})
        default:
            return state;
    }
}
export default global;