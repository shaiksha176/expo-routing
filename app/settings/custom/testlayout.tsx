import { Stack } from "expo-router";

export default function CustomLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Custom Setting",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
  //   return <Stack />;
}
