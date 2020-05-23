const initialState = { details: {}, dancers: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EVENT_SUCCESS":
      return { ...state, details: action.payload };
    case "FETCH_DANCERS_SUCCESS":
      return { ...state, dancers: action.payload };
    default:
      return state;
  }
};
