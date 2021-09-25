import React, { useEffect, useState } from "react";
import { AppNavigationRouteParams } from "~/routes/appRoutesParams";
import { RouteProp } from "@react-navigation/native";
import { Routes } from "~/routes/appRoutes";
import { appApi } from "~/services/api";
import PlaylistContainer from "~/containers/Playlist";
import { Playlist } from "~/models/Playlist";
import { States } from "~/models/States";

interface PlaylistScreenProps {
  route: RouteProp<AppNavigationRouteParams, Routes.Playlist>;
}

const PlaylistScreen = ({ route }: PlaylistScreenProps) => {
  const [playlistData, setPlaylistData] = useState<Playlist>();
  const [state, setState] = useState(States.loading);

  const handleOnGetPlaylist = async () => {
    try {
      const response = await appApi.get(`playlists/${route.params.playlistId}`);

      setPlaylistData(response.data);
      setState(States.default);
    } catch (error) {
      setState(States.error);
    }
  };

  useEffect(() => {
    handleOnGetPlaylist();
  }, []);

  return <PlaylistContainer playlist={playlistData} state={state} />;
};

export default PlaylistScreen;
