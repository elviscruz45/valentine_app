const INITIAL_STATE = {
  description: null,
  post_list: null,
  photo_uri: null,
  photo_uuid: null,
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
    case "SET_PHOTO_STORAGE_UUID":
      return {
        ...state,
        photo_uuid: action.payload,
      };
    default:
      return state;
  }
}

export default post;
