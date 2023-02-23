import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { updateEmail, updatePassword } from "../actions/user";

class Login extends Component {
  login = () => {
    console.log("hola");
  };

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/smcv2.png")}
          style={{ width: 60, height: 60 }}
        />
        <Image
          source={require("../assets/valentine.png")}
          style={{ width: 232, height: 73 }}
        />
        <TextInput
          value={this.props.email}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.updateEmail(input)}
          placeholder="Phone number, email or username"
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

        <TouchableOpacity style={styles.button} onPress={() => this.login()}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Signup")}
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
})(Login);
