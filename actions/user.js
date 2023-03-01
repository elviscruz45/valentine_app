import firebase from "../config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const updateUsername = (username) => (dispatch) => {
  dispatch({
    type: "UPDATE_USERNAME",
    payload: username,
  });
};

export const updateEmail = (email) => (dispatch) => {
  dispatch({
    type: "UPDATE_EMAIL",
    payload: email,
  });
};

export const updatePassword = (password) => (dispatch) => {
  dispatch({
    type: "UPDATE_PASSWORD",
    payload: password,
  });
};

export const updateBio = (bio) => (dispatch) => {
  dispatch({
    type: "UPDATE_BIO",
    payload: bio,
  });
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: "SINGIN_USER_REQUEST" });
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    dispatch({
      type: "SIGNIN_USER_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "SIGNIN_USER_FAILURE",
      payload: error.message,
    });
    alert(error.message);
  }
};

export const signup = (email, password) => async (dispatch) => {
  dispatch({ type: "SINGUP_USER_REQUEST" });
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    dispatch({
      type: "SIGNUP_USER_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: "SIGNUP_USER_FAILURE",
      payload: error.message,
    });
    alert(error.message);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT_USER_REQUEST" });
};
