const tableTransaksiBarang = (state = {
    listBarang: []
}, action) => {
    switch(action.type){
        case "TABLE_TRANSAKSI_BARANG_ADD_BARANG":
            return Object.assign({}, state, {listBarang: [...state.listBarang, action.barang]})
        case "TABLE_TRANSAKSI_BARANG_DELETE_BARANG":
            return Object.assign({}, state, {listBarang: [
                ...state.listBarang.slice(0, action.index),
                ...state.listBarang.slice(action.index + 1)
            ]})
        case "TABLE_TRANSAKSI_BARANG_CLEAR_LIST_BARANG":
            return Object.assign({}, state, {listBarang: []})
        default:
            return state;
    }
}
export default tableTransaksiBarang;