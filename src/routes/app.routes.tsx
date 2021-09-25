import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "~/screens/Home";
import AlbumScreen from "~/screens/Album";
import { AppNavigationRouteParams } from "./appRoutesParams";
import { Routes } from "./appRoutes";
import PlaylistScreen from "~/screens/Playlist";
import ArtistScreen from "~/screens/Artist";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<AppNavigationRouteParams>();

const HomeStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Routes.Home} component={HomeScreen} />
    <Stack.Screen
      name={Routes.Album}
      component={AlbumScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#121212",
          elevation: 0,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name={Routes.Playlist}
      component={PlaylistScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#121212",
          elevation: 0,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    />
    <Stack.Screen
      name={Routes.Artist}
      component={ArtistScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#121212",
          elevation: 0,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
);

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "#B3B3B3",
        showLabel: false,
        style: {
          backgroundColor: "#282828",
          elevation: 0,
          borderTopWidth: 0,
          height: 60,
        },
        tabStyle: {
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
