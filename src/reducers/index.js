import {combineReducers} from "redux";

import global from "./global";
import inputPenerimaanBarangPage from "./pages/inputPenerimaanBarangPage";
import inputPengambilanBarangPage from "./pages/inputPengambilanBarangPage";
import tableBarang from "./tables/tableBarang";
import tableSuplier from "./tables/tableSuplier";
import tableTransaksiBarang from "./tables/tableTransaksiBarang";
import tableUser from "./tables/tableUser";
import tableCustomer from "./tables/tableCustomer";
import cariNamaBarangModal from "./modals/cariNamaBarangModal";
import cariBarcodeModal from "./modals/cariBarcodeModal";
import tambahTransaksiBarangModal from "./modals/tambahTransaksiBarangModal";
import loginForm from "./forms/loginForm";
import inputBarangForm from "./forms/inputBarangForm";
import ubahBarangForm from "./forms/ubahBarangForm";
import inputSuplierForm from "./forms/inputSuplierForm";
import inputUserForm from "./forms/inputUserForm";
import inputCustomerForm from "./forms/inputCustomerForm";
import detailPenerimaanBarangForm from "./forms/detailPenerimaanBarangForm";
import detailPengambilanBarangForm from "./forms/detailPengambilanBarangForm";

export default combineReducers({
    global,
    inputPenerimaanBarangPage,
    inputPengambilanBarangPage,
    tableBarang,
    tableSuplier,
    tableTransaksiBarang,
    tableUser,
    tableCustomer,
    cariNamaBarangModal,
    cariBarcodeModal,
    tambahTransaksiBarangModal,
    loginForm,
    inputBarangForm,
    ubahBarangForm,
    inputSuplierForm,
    inputUserForm,
    inputCustomerForm,
    detailPenerimaanBarangForm,
    detailPengambilanBarangForm
})