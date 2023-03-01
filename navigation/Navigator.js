import { View, Text } from "react-native";
import React from "react";
import { connect } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { user } from "../utils/userDB";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function Navigator(props) {
  return <>{props.user_login ? <TabNavigator /> : <AuthNavigator />}</>;
}

const mapStateToProps = (reducers) => {
  return reducers.user;
};

export default connect(mapStateToProps)(Navigator);
