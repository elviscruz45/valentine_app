import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import {
  post,
  getPosts,
  uploadPost_Photo,
  photo_location,
  uploadPost,
} from "../actions/post";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

class Post extends Component {
  state = {
    showModal: false,
    image: null,
  };
  setLocation = (location) => {
    this.setState({ ...this.state, showModal: false });
    // this.props.photo_location(location);
  };
  pickImage = async () => {
    console.log("nuevo pick Image");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    console.log(this.state);

    if (!result.canceled) {
      // this.setState({ ...this.state, image: result.assets[0].uri });
      this.setState({ ...this.state, image: result.assets[0].uri });
      console.log(this.state);
      console.log(this.props);
    }
  };

  async uploadPost1() {
    const {
      user_login,
      upload_post,
      bio,
      email,
      uid,
      photo_uri,
      photo_uuid,
      likes,
    } = this.props;
    const upload = {
      postPhoto: this.state.image,
      postDescription: upload_post,
      bio: bio,
      uid: uid,
      photo: "download url",
      username: user_login,
      email: email,
      photo_uuid: photo_uuid,
      likes: likes,
    };
    await this.props.uploadPost_Photo(upload);
    await this.props.getPosts();
    this.props.navigation.navigate("Home");
  }

  modal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.showModal}
      >
        <SafeAreaView style={[styles.container, styles.center]}>
          <TouchableOpacity
            style={styles.border}
            onPress={() => this.setLocation("Aguas Residuales")}
          >
            <Text>Aguas Residuales</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.modal()}

        <View>
          {this.state.image == null ? (
            <TouchableOpacity onPress={() => this.pickImage()}>
              <View style={styles.containerPost}>
                <Image
                  source={require("../assets/upload_icon.png")}
                  style={styles.roundImageUpload}
                />
                <Text>Click here to upload an Image</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.pickImage()}>
              <Image
                source={{
                  uri: this.state.image,
                }}
                style={styles.postPhoto}
              />
              <Text>Click here to upload another Image</Text>
            </TouchableOpacity>
          )}
        </View>

        <TextInput
          value={this.props.upload_post}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.post(input)}
          placeholder="descriptions"
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={styles.border}
          onPress={() => this.setState({ showModal: true })}
        >
          <Text style={styles.gray}>
            {this.props.location ? this.props.location : "Add a Location"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.uploadPost1()}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    upload_post: reducers.post.description,
    photo_uri: reducers.post.photo_uri,
    bio: reducers.user.bio,
    email: reducers.user.email,
    uid: reducers.user.uid,
    photo_uuid: reducers.post.photo_uuid,
    location: reducers.post.location,
    likes: reducers.post.likes,
  };
};

export default connect(mapStateToProps, {
  post,
  uploadPost_Photo,
  photo_location,
  getPosts,
})(Post);
