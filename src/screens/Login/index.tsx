import * as Linking from "expo-linking";
import React, { useEffect } from "react";
import LoginContainer from "~/containers/Login";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useDispatch } from "react-redux";
import { addAuthData, AuthState } from "~/redux/reducers/auth";
import Constants from "expo-constants";
import { appApi, authApi } from "~/services/api";
import { firestoreDatabase } from "~/../firebase";

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

function LoginScreen() {
  const dispatch = useDispatch();

  const handleOnGetTokens = async (code: string) => {
    const params = new URLSearchParams();

    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", Constants.manifest?.extra?.redirectUri);

    const { data } = await authApi.post<AuthState>("api/token", params);

    dispatch(addAuthData(data));

    appApi.defaults.headers.Authorization = `Bearer ${data.access_token}`;
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "f22d961f548f4442936ba5257dc37f88",
      scopes: [
        "user-read-email",
        "playlist-modify-public",
        "user-read-recently-played",
        "user-top-read",
      ],
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
      firestoreDatabase.collection("sessions").doc(response.params.code).set({
        state: response.params.state,
        date: new Date(),
      });

      const { code } = response.params;

      handleOnGetTokens(code);
    }
  }, [response]);

  return <LoginContainer onLogin={() => promptAsync()} />;
}

export default LoginScreen;
