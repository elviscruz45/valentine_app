const INITIAL_STATE = {
  count: 20,
  auth: "elvis",
};

function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default reducer1;
