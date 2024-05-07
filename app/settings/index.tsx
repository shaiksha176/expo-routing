import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Settings = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Text>Setting</Text>
      <Link href="/settings/custom/">Go to Custom Settings</Link>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
