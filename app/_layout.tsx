import { Slot, Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "pink",
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
        name="settings"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="settings/custom/index"
        options={{
          headerTitle: "Custom",
        }}
      /> */}
      <Stack.Screen
        name="orders/(tabs)/shipment"
        options={{
          headerTitle: "Invoice",
        }}
      />
    </Stack>
  );
}
