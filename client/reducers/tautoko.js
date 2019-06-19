const initialState = {
    count: 0,
}

function tautoko(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_COUNT": {
            return { ...state, ...action }
        }
        case "DECREMENT_COUNT": {
            return { ...state, ...action }
        }
        default:
            return state
    }
}

export default tautoko