import { Slot, Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="home/index"
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          headerTitle: "Settings",
        }}
      />
      {/* <Stack.Screen
        name="settings/custom/index"
        options={{
          headerTitle: "Custom",
        }}
      /> */}
    </Stack>
  );
}
