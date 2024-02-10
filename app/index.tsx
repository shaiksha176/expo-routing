import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const index = () => {
  // return <Redirect href="/home/" />;
  return <Redirect href="/(tabs)/home/" />;
};

export default index;

const styles = StyleSheet.create({});
