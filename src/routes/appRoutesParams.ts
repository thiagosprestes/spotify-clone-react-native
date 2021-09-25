import { Routes } from "./appRoutes";

export type AppNavigationRouteParams = {
  [Routes.Home]: undefined;
  [Routes.Album]: {
    albumId: string;
  };
  [Routes.Playlist]: {
    playlistId: string;
  };
  [Routes.Artist]: {
    artistId: string;
  };
};
