import * as Linking from "expo-linking";
import React, { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import LoginContainer from "~/containers/Login";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";

export interface NavigationProps {
  navigation: StackNavigationProp<any, any>;
}

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

function LoginScreen({ navigation }: NavigationProps) {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "f22d961f548f4442936ba5257dc37f88",
      scopes: ["user-read-email", "playlist-modify-public"],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: Linking.makeUrl(),
      }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return <LoginContainer onLogin={() => promptAsync()} />;
}

export default LoginScreen;
