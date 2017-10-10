const tablePengambilanBarang = (state = {
    isLoading: false,
    listPengambilanBarang: []
}, action) => {
    switch(action.type){
        case "TABLE_PENGAMBILAN_BARANG_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_PENGAMBILAN_BARANG_FETCHED": 
            return Object.assign({}, state, {listPengambilanBarang: action.listPengambilanBarang, isLoading: false})
        default:
            return state;
    }
}
export default tablePengambilanBarang;