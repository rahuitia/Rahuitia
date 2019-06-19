import { getRahui } from '../apis/rahui'


export function selectedRahui () {
    return {
      type: 'SELECTED_RAHUI',
      zoom: 14
    }
}


export function saveAllRahui (rahuiArr) {
    return {
        type: 'SAVE_ALLRAHUI',
        rahui: rahuiArr
    }
}


export function fetchAllRahui () {
    return dispatch => { 
        getRahui().then(allrahui => {
            dispatch(saveAllRahui(allrahui))
        })     
    }
}


