const dateRangeForm = (state = {
    dari: null,
    sampai: null
}, action) => {
    switch(action.type){
        case "DATE_RANGE_FORM_ON_DARI_CHANGE":
            return Object.assign({}, state, {dari: action.date})
        case "DATE_RANGE_FORM_ON_SAMPAI_CHANGE":
            return Object.assign({}, state, {sampai: action.date})
        default:
            return state;
    }
}
export default dateRangeForm;