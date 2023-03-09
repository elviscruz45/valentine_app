import { dbase, storage } from "../config/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  addDoc,
  updateDoc,
  getMetadata,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

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

    // to upload a photo in the firebase storage
    const uuid = uuidv4();
    const storageRef = ref(storage, `${uuid}`);

    // Get the download URL
    getDownloadURL(storageRef)
      .then((url) => {
        console.log(
          "URL getDownloadURL INIT ---------------------------------------"
        );
        console.log(url);
        console.log(
          "URL getDownloadURL FINISH ---------------------------------------"
        );
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          // ...
          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;
        }
      });

    fetch(upload.postPhoto)
      .then((response) => response.blob())
      .then((blob) => uploadBytes(storageRef, blob))
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");

        console.log("ENNNDDUploaded a blob or file!");
      });

    dispatch({
      type: "SET_PHOTO_STORAGE_UUID",
      payload: uuid,
    });
  } catch (error) {
    alert(error.message);
  }
};
