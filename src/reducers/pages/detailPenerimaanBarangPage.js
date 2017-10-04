const detailPenerimaanBarangPage = (state = {
    tanggalPenerimaan: "",
    tanggalEntri: "",
    suplier: {nama: ""},
    checker: {nama: ""},
    entri: {nama: ""},
    isLoading: false
}, action) => {
    switch(action.type){
        case "DETAIL_PENERIMAAN_BARANG_PAGE_FETCHING":
            return Object.assign({}, state, {isLoading: true})
        case "DETAIL_PENERIMAAN_BARANG_PAGE_FETCHED":
            return Object.assign({}, state, {
                tanggalPenerimaan: action.tanggalPenerimaan,
                tanggalEntri: action.tanggalEntri,
                suplier: action.suplier,
                checker: action.checker,
                entri: action.entri,
                isLoading: false
            })
        default:
            return state;
    }
}
export default detailPenerimaanBarangPage;