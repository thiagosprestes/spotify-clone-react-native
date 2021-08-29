import { Routes } from "./appRoutes";

export type AppNavigationRouteParams = {
  [Routes.Home]: undefined;
  [Routes.Album]: {
    albumId: string;
  };
};
