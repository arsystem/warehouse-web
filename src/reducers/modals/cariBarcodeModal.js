const cariBarcodeModal = (state = {
    isShown: false,
    barcode: ""
}, action) => {
    switch(action.type){
        case "CARI_BARCODE_MODAL_SHOW":
            return Object.assign({}, state, {isShown: true})
        case "CARI_BARCODE_MODAL_HIDE":
            return Object.assign({}, state, {isShown: false, barcode: ""})
        case "CARI_BARCODE_MODAL_ON_BARCODE_CHANGE":
            return Object.assign({}, state, {barcode: action.value})
        default:
            return state;
    }
}
export default cariBarcodeModal;