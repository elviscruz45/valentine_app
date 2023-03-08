import React, { useRef } from "react";
import { connect } from "react-redux";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";
import { savePhotoUri } from "../actions/post";

function cameraUpload(props) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  async function snapPhoto() {
    if (cameraRef.current) {
      const options = { quality: 0.01, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data);
      props.savePhotoUri(data.uri);
      props.navigation.navigate("Post_Camera");
    }
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <View style={styles2.container}>
      <Camera style={styles2.camera} type={type} ref={cameraRef}>
        <View style={styles2.buttonContainer}>
          <TouchableOpacity style={styles2.button} onPress={toggleCameraType}>
            <Ionicons name="camera-reverse-sharp" size={35} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cameraButton}
            onPress={() => snapPhoto()}
          >
            <View
              style={{
                borderWidth: 2,
                borderRadius: "50%",
                borderColor: "white",
                height: 50,
                width: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: "white",
                  height: 40,
                  width: 40,
                  backgroundColor: "white",
                }}
              ></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    // </SafeAreaView>
  );
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    upload_post: reducers.post.description,
    bio: reducers.user.bio,
    user_photo: reducers.user.user_photo,
    email: reducers.user.email,
    uid: reducers.user.uid,
    post_list: reducers.post.post_list,
    equipment_photo: reducers.user.equipment_photo,
    equipmentname: reducers.user.equipmentname,
  };
};

export default connect(mapStateToProps, { savePhotoUri })(cameraUpload);

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
