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
import * as UserActions from "../redux/modules/user";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: "Pin code",
      state: "State",
      city: "City"
    };
  }

  componentWillMount() {
    console.log(this.props.user.productData);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Dengue Insurance</Text>
          <Text style={styles.subHeaderText}>June 2017-June 2018</Text>
          <View style={{ marginVertical: 20 }}>
            <Text style={[styles.headerText, { color: "#f48fb1" }]}>
              Policy Number
            </Text>
            <Text style={[styles.subHeaderText, { color: "#f48fb1" }]}>
              123 456 789
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={[styles.headerText, { color: "#f48fb1" }]}>
              Sonia Babu
            </Text>
            <Text style={[styles.subHeaderText, { color: "#f48fb1" }]}>
              123 456 789
            </Text>
          </View>
        </View>
        <Text style={styles.subTitleView}>
          Please enter your residential location
        </Text>
        <Text style={[styles.subTitleView, { fontWeight: "100" }]}>
          Residential Location
        </Text>
        <View style={{ margin: 20 }}>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={pinCode => this.setState({ pinCode })}
            value={this.state.pinCode}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={state => this.setState({ state })}
            value={this.state.state}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={city => this.setState({ city })}
            value={this.state.city}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#e91e63",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25
  },
  subHeaderText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15
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
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10
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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
