import {combineReducers} from "redux";

import global from "./global";
import inputPenerimaanBarangPage from "./pages/inputPenerimaanBarangPage";
import inputPengambilanBarangPage from "./pages/inputPengambilanBarangPage";
import detailPenerimaanBarangPage from "./pages/detailPenerimaanBarangPage";
import tableBarang from "./tables/tableBarang";
import tableSuplier from "./tables/tableSuplier";
import tableTransaksiBarang from "./tables/tableTransaksiBarang";
import tableUser from "./tables/tableUser";
import tableCustomer from "./tables/tableCustomer";
import tablePenerimaanBarang from "./tables/tablePenerimaanBarang";
import tablePengambilanBarang from "./tables/tablePengambilanBarang";
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
import dateRangeForm from "./forms/dateRangeForm";

export default combineReducers({
    global,
    inputPenerimaanBarangPage,
    inputPengambilanBarangPage,
    detailPenerimaanBarangPage,
    tableBarang,
    tableSuplier,
    tableTransaksiBarang,
    tableUser,
    tableCustomer,
    tablePenerimaanBarang,
    tablePengambilanBarang,
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
    detailPengambilanBarangForm,
    dateRangeForm
})