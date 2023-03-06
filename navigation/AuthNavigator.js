import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
