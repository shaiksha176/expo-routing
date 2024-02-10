import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const BasketTab = () => {
  return (
    <View>
      <Text>BasketTab</Text>
      <Link href="/settings/custom/">Go to custom settings screen</Link>
    </View>
  );
};

export default BasketTab;

const styles = StyleSheet.create({});
