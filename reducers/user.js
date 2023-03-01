const INITIAL_STATE = {
  username: null,
  email: null,
  password: null,
  bio: null,
  user_login: null,
  loading_login: false,
  error_login: null,
  user_signup: null,
  loading_signup: false,
  error_signup: null,
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
    case "SIGNIN_USER_REQUEST":
      return {
        ...state,
        loading_login: true,
        error_login: null,
      };
    case "SIGNIN_USER_SUCCESS":
      return {
        ...state,
        user_login: action.payload,
        loading_login: false,
        error_login: null,
      };
    case "SIGNIN_USER_FAILURE":
      return {
        ...state,
        user_login: null,
        loading_login: false,
        error_login: action.payload,
      };
    case "SIGNUP_USER_REQUEST":
      return {
        ...state,
        loading_signup: true,
        error_signup: null,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        user_signup: action.payload,
        loading_signup: false,
        error_signup: null,
      };
    case "SIGNUP_USER_FAILURE":
      return {
        ...state,
        user_signup: null,
        loading_signup: false,
        error_signup: action.payload,
      };
    case "LOGOUT_USER_REQUEST":
      return {
        ...state,
        user_login: null,
      };
    default:
      return state;
  }
}

export default user;
