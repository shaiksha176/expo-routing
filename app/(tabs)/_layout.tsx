import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "#1fe687",
        headerTitleAlign: "left",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "blue",
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="welcome"
        options={{
          title: "Home Tab",
          headerTitle: "welcome",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // href: null,
        }}
      />
      <Tabs.Screen
        name="basket/index"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
