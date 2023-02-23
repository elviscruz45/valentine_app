import { View, Text } from "react-native";
import React from "react";
import { connect } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { user } from "../utils/userDB";

const validation = {
  username: "elviscruz45",
  password: "123456",
};

function Navigator(props) {
  return <>{user == validation ? <TabNavigator /> : <AuthNavigator />}</>;
}

const mapStateToProps = (reducers) => {
  return reducers.reducer1;
};

export default connect(mapStateToProps)(Navigator);
