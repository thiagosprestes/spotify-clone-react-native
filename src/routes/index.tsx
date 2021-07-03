import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useSelector } from "react-redux";
import { RootState } from "~/redux/store";

export default function Routes() {
  const { token } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      {token.length > 0 ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
