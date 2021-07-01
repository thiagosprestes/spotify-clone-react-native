import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "~/containers/Home";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
