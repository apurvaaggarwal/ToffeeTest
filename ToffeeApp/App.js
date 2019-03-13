/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import ParentDetails from "./screens/ParentDetails";
import Details from "./screens/Details";

import { Provider } from "react-redux";
import configureStore from "./config/configureStore";
import Root from "./Root";

const store = configureStore();

const AppStackNavigator = createStackNavigator({
  Detail: {
    screen: Details
  },
  Parent: {
    screen: ParentDetails
  },
  Home: {
    screen: HomeScreen
  }
});
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
// const App = createAppContainer(AppStackNavigator);

// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
