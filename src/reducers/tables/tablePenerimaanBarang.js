const tablePenerimaanBarang = (state = {
    isLoading: false,
    listPenerimaanBarang: []
}, action) => {
    switch(action.type){
        case "TABLE_PENERIMAAN_BARANG_LOADING":
            return Object.assign({}, state, {isLoading: true})
        case "TABLE_PENERIMAAN_BARANG_FETCHED": 
            return Object.assign({}, state, {listPenerimaanBarang: action.listPenerimaanBarang, isLoading: false})
        default:
            return state;
    }
}
export default tablePenerimaanBarang;