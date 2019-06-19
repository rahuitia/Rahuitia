const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ALLRAHUI':
      return action.rahui;
    default:
      return state;
  }
};

export default reducer