import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";

export default function Routes() {
  const { access_token } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer>
      {access_token !== "" ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
