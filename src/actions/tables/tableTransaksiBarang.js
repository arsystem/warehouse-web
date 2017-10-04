export const addBarang = (barang, qty) => {return {
    type: "TABLE_TRANSAKSI_BARANG_ADD_BARANG",
    barang: Object.assign({}, barang, {qty: qty})
}}
export const deleteBarang = (index) => {return {
    type: "TABLE_TRANSAKSI_BARANG_DELETE_BARANG",
    index: index
}}
export const clear = () => {return {type: "TABLE_TRANSAKSI_BARANG_CLEAR_LIST_BARANG"}}