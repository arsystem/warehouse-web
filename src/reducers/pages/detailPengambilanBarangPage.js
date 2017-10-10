const detailPengambilanBarangPage = (state = {
    tanggalPengamibilan: "",
    tanggalEntri: "",
    customer: {nama: ""},
    checker: {nama: ""},
    entri: {nama: ""},
    isLoading: false
}, action) => {
    switch(action.type){
        case "DETAIL_PENGAMBILAN_BARANG_PAGE_FETCHING":
            return Object.assign({}, state, {isLoading: true})
        case "DETAIL_PENGAMBILAN_BARANG_PAGE_FETCHED":
            return Object.assign({}, state, {
                tanggalPengambilan: action.tanggalPengambilan,
                tanggalEntri: action.tanggalEntri,
                customer: action.customer,
                checker: action.checker,
                entri: action.entri,
                isLoading: false
            })
        default:
            return state;
    }
}
export default detailPengambilanBarangPage;