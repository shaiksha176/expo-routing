import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Settings = () => {
  return (
    <View>
      <Text>Setting</Text>
      <Link href="/settings/custom/">
        Go to Custom Settings
      </Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
