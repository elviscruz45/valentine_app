import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles";
import { connect } from "react-redux";
import { add1, subtract1 } from "../actions";
import { logout } from "../actions/user";

class Home extends React.Component {
  add = () => {
    this.props.add1();
  };
  subtract = () => {
    this.props.subtract1();
  };

  logout = () => {
    console.log(this.props);
    this.props.logout();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Home</Text>
        <Text>Valentine of creation &&, forecast date june 30,2024 {"  "}</Text>
        <Text>{this.props.count}</Text>
        <Button title="Add" onPress={() => this.add()} />
        <Button title="Subtract" onPress={() => this.subtract()} />
        <Button title="Logout" onPress={() => this.logout()} />
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
  };
};

export default connect(mapStateToProps, { add1, subtract1, logout })(Home);
