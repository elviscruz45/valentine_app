import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import Navigator from "./navigation/Navigator";

// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const composedEnhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(reduxThunk)
// );

// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = compose(applyMiddleware(reduxThunk, logger));

const store = createStore(rootReducers, {}, composedEnhancers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    );
  }
}
