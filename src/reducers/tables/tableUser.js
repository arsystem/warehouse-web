const tableUser = (state = {
    isLoading: false,
    listUser: []
}, action) => {
    switch(action.type){
        case "TABLE_USER_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_USER_FETCHED":
            return Object.assign({}, state, {listUser: action.listUser, isLoading: false})
        default:
            return state;
    }
}
export default tableUser;