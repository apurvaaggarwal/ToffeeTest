import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./config/navigator";

export default class Root extends Component {
  /* *
   * @constructor: Default constructor
   * */
  constructor(props) {
    super(props);
  }

  /* *
   * @function: Default render function
   * */
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
