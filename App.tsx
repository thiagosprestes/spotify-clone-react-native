import React from "react";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  useFonts,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "~/routes";
import { persistor, store } from "~/redux/store";
import { SafeAreaView, StatusBar } from "react-native";

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
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <SafeAreaView
        style={{
          paddingTop: StatusBar.currentHeight,
          flex: 1,
        }}
      >
        <StatusBar translucent />
        <Routes />
      </SafeAreaView>
      {/* </PersistGate> */}
    </Provider>
  );
}
