const INITIAL_STATE = {
  username: null,
  email: null,
  password: null,
  bio: null,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_BIO":
      return { ...state, bio: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

export default user;
