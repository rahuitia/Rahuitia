import { getIwi } from '../apis/iwi'




export function saveAllIwi(iwiArr) {

    return {
        type: 'SAVE_IWI',
        iwi: iwiArr
    }
}

export function saveArea(iwiArr) {
    return {
        type: 'SAVE_AREA',
        area: iwiArr,
    }
}


export function fetchAllIwi() {

    return dispatch => {

        getIwi().then(allIwi => {
            dispatch(saveAllIwi(allIwi))
            dispatch(saveArea(allIwi))
        })
    }
}

