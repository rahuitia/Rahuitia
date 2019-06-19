const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_COORDS':
            return action.coords;
        default:
            return state;
    }
};


export default reducer