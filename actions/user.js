import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { dbase } from "../config/firebase";

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
    const user_uid = userCredential.user.uid;
    const docRef = doc(dbase, "users", user_uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch({
        type: "SIGNIN_USER_SUCCESS",
        payload: docSnap.data(),
      });
    } else {
      // doc.data() will be undefined in this case
      alert("No registered");
    }
    console.log("bye user");
  } catch (error) {
    dispatch({
      type: "SIGNIN_USER_FAILURE",
      payload: error.message,
    });
    alert(error.message);
  }
};

export const signup =
  (email, password, username, bio, user_photo) => async (dispatch) => {
    dispatch({ type: "SINGUP_USER_REQUEST" });
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const response = userCredential.user;
      if (response.uid) {
        const user = {
          uid: response.uid,
          email: email,
          username: username,
          bio: bio,
          user_photo: user_photo,
          token: null,
        };
        const docRef = doc(collection(dbase, "users"), user.uid);
        await setDoc(docRef, user);

        dispatch({
          type: "SIGNUP_USER_SUCCESS",
          payload: response,
        });
      }
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
