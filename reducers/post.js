const INITIAL_STATE = {
  description: null,
  post_list: null,
};

function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        post_list: action.payload,
      };
    default:
      return state;
  }
}

export default post;
