import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="custom/index"
        options={{ title: "custom settings" }}
      />
    </Stack>
  );
}
