import {fetchPengambilanBarang} from "../tables/tablePengambilanBarang";

export const onCariSubmit = () => {return (dispatch, getState) => {
    let mulaiTanggal = getState().dateRangeForm.dari
    let sampaiTanggal = getState().dateRangeForm.sampai

    mulaiTanggal = mulaiTanggal.startOf("day").toISOString()
    sampaiTanggal = sampaiTanggal.startOf("day").toISOString()
    dispatch(fetchPengambilanBarang(mulaiTanggal, sampaiTanggal))
}}