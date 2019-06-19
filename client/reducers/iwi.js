const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_IWI':
            return action.iwi;
        default:
            return state;
    }
};

export default reducer