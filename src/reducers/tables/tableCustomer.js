const tableCustomer = (state = {
    isLoading: false,
    listCustomer: []
}, action) => {
    switch(action.type){
        case "TABLE_CUSTOMER_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_CUSTOMER_FETCHED": 
            return Object.assign({}, state, {listCustomer: action.listCustomer, isLoading: false})
        default:
            return state;
    }
}
export default tableCustomer;