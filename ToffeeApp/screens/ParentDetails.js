/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput
} from "react-native";

export default class ParentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Full Name",
      email: "Email",
      number: "10-digit mobile number"
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.subTitleView}>
          Now please enter the name of one of the parents with contact details
          like email and mobile number
        </Text>
        <Text style={styles.headerText}>Father/Mother Details</Text>
        <View style={styles.rowView}>
          <View style={styles.circleView}>
            <Text style={styles.headerText}>Mr</Text>
          </View>
          <View style={styles.circleView}>
            <Text style={styles.headerText}>Mrs</Text>
          </View>
          <View style={styles.circleView}>
            <Text style={styles.headerText}>Ms</Text>
          </View>
        </View>
        <View style={{ margin: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={number => this.setState({ number })}
            value={this.state.number}
          />
        </View>
        <Text style={styles.subTitleView}>
          Parent's contact details will be used for operational purposes
        </Text>
        <View
          style={{
            padding: 20,
            margin: 20
          }}
        >
          <Button
            onPress={() => navigate("Detail")}
            color="#e91e63"
            title=" Next ->"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleView: {
    borderRadius: 40,
    borderColor: "#757575",
    borderWidth: 2,
    padding: 10
  },
  headerView: {
    backgroundColor: "#e91e63"
  },
  headerText: {
    fontWeight: "200",
    color: "#000",
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
    color: "#000",
    fontSize: 15,
    margin: 10,
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
