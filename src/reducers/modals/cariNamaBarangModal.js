const cariNamaBarangModal = (state = {
    isShown: false,
    namaBarang: ""
}, action) => {
    switch(action.type){
        case "CARI_NAMA_BARANG_MODAL_SHOW":
            return Object.assign({}, state, {isShown: true})
        case "CARI_NAMA_BARANG_MODAL_HIDE":
            return Object.assign({}, state, {isShown: false, namaBarang: ""})
        case "CARI_NAMA_BARANG_MODAL_ON_NAMA_BARANG_CHANGE":
            return Object.assign({}, state, {namaBarang: action.value})
        default:
            return state;
    }
}
export default cariNamaBarangModal;