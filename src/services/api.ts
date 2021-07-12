import axios from "axios";
import Constants from "expo-constants";
import { addAuthData, AuthState, removeAuthData } from "~/redux/reducers/auth";
import { store } from "~/redux/store";

const authApi = axios.create({
  baseURL: "https://accounts.spotify.com/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${Constants.manifest?.extra?.base64AuthToken}`,
  },
});

const appApi = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

appApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const {
      response: { status },
    } = error;

    if (status === 401) {
      const { refresh_token } = store.getState().auth;

      const params = new URLSearchParams();

      params.append("grant_type", "refresh_token");
      params.append("refresh_token", refresh_token);

      if (refresh_token) {
        try {
          const { data } = await authApi.post<AuthState>("api/token", params);

          store.dispatch(addAuthData(data));

          appApi.defaults.headers.Authorization = `Bearer ${data.access_token}`;
        } catch (error) {
          console.log("Error when try to get new access token :(", error);
        }
      } else {
        store.dispatch(removeAuthData());
      }
    }
  }
);

export { authApi, appApi };
