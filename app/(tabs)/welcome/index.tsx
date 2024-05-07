import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack, Tabs } from "expo-router";
import { TabBarIcon } from "../_layout";

const HomeTab = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Welcome Tab",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          //   header: (props) => {
          //     return (
          //       <SafeAreaView>
          //         <View style={{ height: 200, backgroundColor: "red" }}>
          //           <Text>Custom Settings</Text>
          //         </View>
          //       </SafeAreaView>
          //     );
          //   },
        }}
      />
      <Text>HomeTab</Text>
      <Link href="/(tabs)/welcome/cart">Go to cart</Link>
      {/* <Link href="/orders/">Go to Orders</Link> */}
      <Link href="/orders/(tabs)/invoice">Go to Orders</Link>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
