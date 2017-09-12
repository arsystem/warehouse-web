const tambahTransaksiBarangModal = (state = {
    isShown: false,
    isError: false,
    barang: null,
    qty: "",
    searchBarcode: ""
}, action) => {
    switch(action.type){
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_SHOW":
            return Object.assign({}, state, {isShown: true})
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_HIDE":
            return Object.assign({}, state, {isShown: false, isError: false, barang: null, searchBarcode: "", qty: ""})
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_SHOW_ERROR":
            return Object.assign({}, state, {isError: true})
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_ON_SEARCH_BARCODE_CHANGE":
            return Object.assign({}, state, {searchBarcode: action.value})
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_ON_QTY_CHANGE":
            return Object.assign({}, state, {qty: action.value})
        case "TAMBAH_TRANSAKSI_BARANG_MODAL_ADD_BARANG":
            return Object.assign({}, state, {barang: action.barang})
        default:
            return state;
    }
}
export default tambahTransaksiBarangModal;