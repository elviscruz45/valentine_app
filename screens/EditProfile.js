import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateBio,
  updateUsername,
  signup,
} from "../actions/user";

class EditProfile extends Component {
  edit = () => {
    const { email, password, username, bio, user_photo } = this.props;
    // this.props.signup(email, password, username, bio, user_photo);
    this.props.navigation.navigate("profile");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/valentine.png")}
          style={{ width: 232, height: 73 }}
        />
        <Image
          style={styles.roundImage}
          source={{ uri: this.props.user_photo }}
        />

        <Text></Text>
        <Text>Sign up to see what is happening around you!</Text>
        <Text></Text>

        <TextInput
          value={this.props.bio}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updateBio(input)}
          placeholder="Biography"
          secureTextEntry={false}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.edit()}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    username: reducers.user.username,
    email: reducers.user.email,
    password: reducers.user.password,
    bio: reducers.user.bio,
    user_photo: reducers.user.user_photo,
  };
};

export default connect(mapStateToProps, {
  updateEmail,
  updatePassword,
  updateBio,
  updateUsername,
  signup,
})(EditProfile);
