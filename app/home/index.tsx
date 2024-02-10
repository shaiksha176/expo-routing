import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={{}}>
      <Text>HomeScreen</Text>
      <Link href="/settings/">Go to settings</Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
