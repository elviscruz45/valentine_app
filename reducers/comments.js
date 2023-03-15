const INITIAL_STATE = {
  comments: [],
  commentField: null,
  actualCommentId: null,
  actualPostDescription: null,
};

function comments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_COMMENT_FIELD":
      return { ...state, commentField: action.payload };

    case "UPDATE_COMMENT_FIELD_FIRESTORE":
      return { ...state, comments: action.payload };
    case "ACTUAL_COMMENT_ID":
      return { ...state, actualCommentId: action.payload };
    case "ACTUAL_COMMENT_POST_DESCRIPTION":
      return { ...state, actualPostDescription: action.payload };
    case "GET_ALL_COMMENTS_SUCCESS":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}
export default comments;
