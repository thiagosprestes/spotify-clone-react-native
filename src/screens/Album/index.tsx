import React, { useEffect, useState } from "react";
import AlbumContainer from "~/containers/Album";
import { AppNavigationRouteParams } from "~/routes/appRoutesParams";
import { RouteProp } from "@react-navigation/native";
import { Routes } from "~/routes/appRoutes";
import { appApi } from "~/services/api";
import { Album } from "~/models/Album";

interface AlbumScreenProps {
  route: RouteProp<AppNavigationRouteParams, Routes.Album>;
}

const AlbumScreen = ({ route }: AlbumScreenProps) => {
  const [albumData, setAlbumData] = useState<Album>();

  const handleOnGetAlbum = async () => {
    const response = await appApi.get(`albums/${route.params.albumId}`);

    setAlbumData(response.data);

    // console.log(
    //   "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    //   albumData?.tracks.items
    // );
  };

  useEffect(() => {
    handleOnGetAlbum();
  }, []);

  return (
    <AlbumContainer
      cover={albumData?.images[0].url}
      author={albumData?.artists[0].name}
      title={albumData?.name}
      tracks={albumData?.tracks.items}
    />
  );
};

export default AlbumScreen;
