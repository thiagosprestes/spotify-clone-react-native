import React, { useEffect, useState } from "react";
import AlbumContainer from "~/containers/Album";
import { AppNavigationRouteParams } from "~/routes/appRoutesParams";
import { RouteProp } from "@react-navigation/native";
import { Routes } from "~/routes/appRoutes";
import { appApi } from "~/services/api";
import { Album } from "~/models/Album";
import { States } from "~/models/States";

interface AlbumScreenProps {
  route: RouteProp<AppNavigationRouteParams, Routes.Album>;
}

const AlbumScreen = ({ route }: AlbumScreenProps) => {
  const [albumData, setAlbumData] = useState<Album>();
  const [state, setState] = useState(States.loading);

  const handleOnGetAlbum = async () => {
    try {
      const response = await appApi.get(`albums/${route.params.albumId}`);

      setAlbumData(response.data);
      setState(States.default);
    } catch (error) {
      setState(States.error);
    }
  };

  useEffect(() => {
    handleOnGetAlbum();
  }, []);

  return <AlbumContainer album={albumData} state={state} />;
};

export default AlbumScreen;
