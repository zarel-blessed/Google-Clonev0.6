export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TEXT: "SET_SEARCH_TEXT",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
