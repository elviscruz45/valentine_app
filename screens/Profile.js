import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { logout } from "../actions/user";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Profile 2222</Text>
      <Text>{props.count}</Text>
      <Text>{props.user_login}</Text>
      <Text>{props.bio}</Text>
      <Text>{props.email}</Text>
      <Text>{props.uid}</Text>
      <TouchableOpacity onPress={() => props.logout()}>
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
  };
};

export default connect(mapStateToProps, { logout })(Profile);
