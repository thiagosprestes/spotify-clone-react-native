import * as Linking from "expo-linking";
import React, { useEffect } from "react";
import LoginContainer from "~/containers/Login";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useDispatch } from "react-redux";
import { addToken } from "~/redux/reducers/user";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

function LoginScreen() {
  const dispatch = useDispatch();

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

      dispatch(addToken(code));
    }
  }, [response]);

  return <LoginContainer onLogin={() => promptAsync()} />;
}

export default LoginScreen;
