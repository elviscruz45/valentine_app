import { dbase } from "../config/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export const post = (text) => (dispatch) => {
  dispatch({
    type: "UPDATE_DESCRIPTION",
    payload: text,
  });
};

export const uploadPost = (upload) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(dbase, "posts"), upload);
    const new_upload = { ...upload, id: docRef.id };
    const washingtonRef = doc(dbase, "posts", docRef.id);
    await updateDoc(washingtonRef, new_upload);
  } catch (error) {
    alert(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  // we have to call all posts in dbase, so id it is no required
  const querySnapshot = await getDocs(collection(dbase, "posts"));
  const post_array = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    post_array.push(doc.data());
  });

  if (post_array) {
    dispatch({
      type: "GET_POSTS_SUCCESS",
      payload: post_array,
    });
  } else {
    alert("No registered");
  }
};

export const savePhotoUri = (uri) => async (dispatch) => {
  try {
    dispatch({
      type: "SAVE_PHOTO_URI",
      payload: uri,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const uploadPost_Photo = (upload) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(dbase, "posts"), upload);
    const new_upload = { ...upload, id: docRef.id };
    const washingtonRef = doc(dbase, "posts", docRef.id);
    await updateDoc(washingtonRef, new_upload);
  } catch (error) {
    alert(error.message);
  }
};
