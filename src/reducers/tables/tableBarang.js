const tableBarang = (state = {
    isLoading: false,
    listBarang: []
}, action) => {
    switch(action.type){
        case "TABLE_BARANG_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_BARANG_FETCHED": 
            return Object.assign({}, state, {listBarang: action.listBarang, isLoading: false})
        default:
            return state;
    }
}
export default tableBarang;