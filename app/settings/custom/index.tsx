import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const CustomSettings = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Custom Setting",
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
      <Text>Custom Text</Text>
      <Link href="/(tabs)/home/">Go to Home Tab</Link>
    </View>
  );
};

export default CustomSettings;
