const tableSuplier = (state = {
    isLoading: false,
    listSuplier: []
}, action) => {
    switch(action.type){
        case "TABLE_SUPLIER_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_SUPLIER_FETCHED": 
            return Object.assign({}, state, {listSuplier: action.listSuplier, isLoading: false})
        default:
            return state;
    }
}
export default tableSuplier;