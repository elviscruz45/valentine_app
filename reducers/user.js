const INITIAL_STATE = {
  username: null,
  equipmentname: "C2-CR001",
  email: null,
  password: null,
  bio: null,
  user_login: null,
  loading_login: false,
  error_login: null,
  user_signup: null,
  loading_signup: false,
  error_signup: null,
  uid: null,
  user_photo:
    "https://firebasestorage.googleapis.com/v0/b/valentine-app-ac496.appspot.com/o/rsz_elvis_cruz_verano.jpeg?alt=media&token=af2faafa-c372-4f97-8793-1caea61c9910",
  equipment_photo:
    "https://firebasestorage.googleapis.com/v0/b/valentine-app-ac496.appspot.com/o/CHI.jpeg?alt=media&token=b578d26f-a92b-4125-9022-a8c3537134aa",
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
        user_login: action.payload.username,
        bio: action.payload.bio,
        email: action.payload.email,
        uid: action.payload.uid,
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
