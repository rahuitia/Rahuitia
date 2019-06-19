const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_AREA':
            return newArr(action.area);
        default:
            return state;
    }
};

let areaNames = [];
const newArr = (iwi) => {

    iwi.map(area => {
        for (var i in area) {
            areaNames.push(i)
        }
        
    });

    return areaNames
}

export default reducer