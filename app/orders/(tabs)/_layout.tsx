import { TabBarIcon } from "@/app/(tabs)/_layout";
import { Tabs } from "expo-router";

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
        name="invoice"
        options={{
          title: "Invoice Tab",
          //   headerTitle: "welcome",
          headerShown: true,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,

          // href: null,
        }}
      />
      <Tabs.Screen
        name="shipment"
        options={{
          title: "shipment tab",
          headerShown: true,

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
