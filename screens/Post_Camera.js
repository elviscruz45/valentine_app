import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import {
  post,
  getPosts,
  uploadPost_Photo,
  photo_location,
} from "../actions/post";

class Post_Camera extends Component {
  state = {
    showModal: false,
  };
  setLocation = (location) => {
    this.setState({ showModal: false });
    this.props.photo_location(location);
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
      postPhoto: photo_uri,
      postDescription: upload_post,
      bio: bio,
      uid: uid,
      photo: "download url",
      username: user_login,
      email: email,
      photo_uuid: photo_uuid,
      likes: likes,
    };
    console.log(this.props);
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
        <Image
          source={{
            uri: this.props.photo_uri,
          }}
          style={styles.postPhoto}
        />
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
})(Post_Camera);
