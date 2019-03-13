/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Dengue Insurance</Text>
          <Text style={styles.subHeaderText}>
            Health insurance to cover all dengue related expenses
          </Text>
          <View style={styles.rowView}>
            <View style={styles.columnView}>
              <Text style={styles.titleView}>1 Year</Text>
              <Text style={styles.subTitleView}>Policy Duration</Text>
            </View>
            <View style={styles.columnView}>
              <Text style={styles.titleView}>Rs 425</Text>
              <Text style={styles.subTitleView}>Annual Premium</Text>
            </View>
          </View>
        </View>
        {/* <Image
          style={{ width: 50, height: 50 }}
          source={require("./images/dengue.jpg")}
        /> */}
        <Text style={[styles.headerText, { color: "#bdbdbd" }]}>
          What's covered?
        </Text>
        <View style={styles.rowView}>
          <View
            style={[
              styles.columnView,
              { borderColor: "#fafafa", borderWidth: 4, padding: 20 }
            ]}
          >
            <Text style={[styles.titleView, { color: "#000" }]}>
              Hospitalisation
            </Text>
            <Text style={[styles.subTitleView, { color: "#000" }]}>
              Upto Rs 25,000
            </Text>
          </View>
          <View
            style={[
              styles.columnView,
              { borderColor: "#fafafa", borderWidth: 4, padding: 20 }
            ]}
          >
            <Text style={[styles.titleView, { color: "#000" }]}>
              Diagnostic Tests
            </Text>
            <Text style={[styles.subTitleView, { color: "#000" }]}>
              covered
            </Text>
          </View>
        </View>
        <View style={styles.rowView}>
          <View
            style={[
              styles.columnView,
              { borderColor: "#fafafa", borderWidth: 4, padding: 20 }
            ]}
          >
            <Text style={[styles.titleView, { color: "#000" }]}>Medicines</Text>
            <Text style={[styles.subTitleView, { color: "#000" }]}>
              covered
            </Text>
          </View>
          <View
            style={[
              styles.columnView,
              { borderColor: "#fafafa", borderWidth: 4, padding: 20 }
            ]}
          >
            <Text style={[styles.titleView, { color: "#000" }]} />
            <Text style={[styles.subTitleView, { color: "#9e9e9e" }]}>
              1 More
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            margin: 20
          }}
        >
          <Button
            onPress={() => navigate("Parent")}
            color="#e91e63"
            title=" See Coverage Details"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#e91e63"
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
    textAlign: "center"
  },
  subHeaderText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },
  rowView: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center"
  },
  columnView: {
    flexDirection: "column"
  },
  titleView: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
    textAlign: "center"
  },
  subTitleView: {
    color: "#fce4ec",
    fontSize: 15,
    textAlign: "center"
  },
  container: {
    flex: 1
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
