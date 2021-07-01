import React from "react";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import Routes from "~/routes";
import { AuthProvider } from "~/contexts/providers/auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar translucent />
      <Routes />
    </AuthProvider>
  );
}
