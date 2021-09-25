import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import ArtistContainer from "~/containers/Artist";
import { Artist, ArtistTopTracks } from "~/models/Artist";
import { States } from "~/models/States";
import { Routes } from "~/routes/appRoutes";
import { AppNavigationRouteParams } from "~/routes/appRoutesParams";
import { appApi } from "~/services/api";

interface ArtistScreenProps {
  route: RouteProp<AppNavigationRouteParams, Routes.Artist>;
}

const ArtistScreen = ({ route }: ArtistScreenProps) => {
  const [artistData, setArtistData] = useState<Artist>();
  const [artistTopTracks, setArtistTopTracks] = useState<ArtistTopTracks[]>([]);

  const [state, setState] = useState(States.loading);

  const handleOnGetArtist = async () => {
    try {
      const response = await appApi.get(`artists/${route.params.artistId}`);

      setArtistData(response.data);
      setState(States.default);
    } catch (error) {
      setState(States.error);
    }
  };

  const handleOnGetArtistSongs = async () => {
    try {
      const response = await appApi.get(
        `artists/${route.params.artistId}/top-tracks?market=BR`
      );

      setArtistTopTracks(response.data.tracks);
      setState(States.default);
    } catch (error) {
      setState(States.error);
    }
  };

  useEffect(() => {
    handleOnGetArtist();
    handleOnGetArtistSongs();
  }, []);

  return (
    <ArtistContainer
      state={state}
      artist={artistData}
      artistTopTracks={artistTopTracks.slice(0, 5)}
    />
  );
};

export default ArtistScreen;
