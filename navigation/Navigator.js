import React from "react";
import { connect } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { getAuth } from "firebase/auth";

import { app } from "../config/firebase";

const auth = getAuth(app);

function Navigator(props) {
  return <>{props.user_login ? <TabNavigator /> : <AuthNavigator />}</>;
}

const mapStateToProps = (reducers) => {
  return reducers.user;
};

export default connect(mapStateToProps)(Navigator);
