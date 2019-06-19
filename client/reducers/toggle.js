const initialState = 'eng';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LANG':
      return state == 'eng' ? 'tereo' : 'eng'
    default:
      return state;
  }
};


export default reducer