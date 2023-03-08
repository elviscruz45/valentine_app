const INITIAL_STATE = {
  description: null,
  post_list: null,
  photo_uri: null,
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
    case "SAVE_PHOTO_URI":
      return {
        ...state,
        photo_uri: action.payload,
      };
    default:
      return state;
  }
}

export default post;
