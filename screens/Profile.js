import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { logout } from "../actions/user";
// import firebase from "firebase";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Image style={styles.roundImage} source={{ uri: props.user_photo }} />

      <Text>{props.user_login}</Text>
      <Text>{props.bio}</Text>
      <Text>{props.email}</Text>
      <Text>{props.uid}</Text>
      <TouchableOpacity
        style={styles.buttonSmall}
        onPress={() => props.navigation.navigate("edit_profile")}
      >
        <Text style={styles.bold}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSmall}
        onPress={() => props.logout()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    bio: reducers.user.bio,
    email: reducers.user.email,
    uid: reducers.user.uid,
    user_photo: reducers.user.user_photo,
  };
};

export default connect(mapStateToProps, { logout })(Profile);
