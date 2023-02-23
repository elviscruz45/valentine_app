import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateBio,
  updateUsername,
} from "../actions/user";

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/valentine.png")}
          style={{ width: 232, height: 73 }}
        />
        <Text></Text>
        <Text>Sign up to see what is happening around you!</Text>
        <Text></Text>
        <TextInput
          value={this.props.username}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updateUsername(input)}
          placeholder="username"
          secureTextEntry={false}
        />
        <TextInput
          value={this.props.email}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updateEmail(input)}
          placeholder="Email"
          secureTextEntry={false}
        />
        <TextInput
          value={this.props.password}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updatePassword(input)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TextInput
          value={this.props.bio}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updateBio(input)}
          placeholder="Biography"
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log(this.props)}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.user;
};

export default connect(mapStateToProps, {
  updateEmail,
  updatePassword,
  updateBio,
  updateUsername,
})(Signup);
