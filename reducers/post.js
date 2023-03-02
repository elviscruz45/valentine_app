const INITIAL_STATE = {
  description: null,
};

function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };

    default:
      return state;
  }
}

export default post;
