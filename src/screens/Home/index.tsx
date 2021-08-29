import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HomeContainer from "~/containers/Home";
import { Album, NewReleasesResponse } from "~/models/Album";
import {
  PopularPlaylist,
  PopularPlaylistResponse,
} from "~/models/PopularPlaylist";
import {
  RecentlyPlayed,
  RecentlyPlayedResponse,
} from "~/models/RecentlyPlayed";
import { UserArtist, UserArtistResponse } from "~/models/UserArtist";
import { removeAuthData } from "~/redux/reducers/auth";
import { Routes } from "~/routes/appRoutes";
import { AppNavigationRouteParams } from "~/routes/appRoutesParams";
import { appApi } from "~/services/api";

interface Props {
  navigation: StackNavigationProp<AppNavigationRouteParams, Routes.Home>;
}

function HomeScreen({ navigation }: Props) {
  const [newReleases, setNewReleases] = useState<Album[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<RecentlyPlayed[]>([]);
  const [userTopArtists, setUserTopArtists] = useState<UserArtist[]>([]);
  const [popularPlaylists, setPopularPlaylists] = useState<PopularPlaylist[]>(
    []
  );

  const dispatch = useDispatch();

  const handleGetNewReleases = async () => {
    try {
      const response = await appApi.get<NewReleasesResponse>(
        "browse/new-releases?limit=10"
      );

      setNewReleases(response.data.albums.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetRecentlyPlayed = async () => {
    try {
      const response = await appApi.get<RecentlyPlayedResponse>(
        "me/player/recently-played?limit=6"
      );

      setRecentlyPlayed(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUserTopArtists = async () => {
    try {
      const response = await appApi.get<UserArtistResponse>(
        "me/top/artists?limit=10"
      );

      setUserTopArtists(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPopularPlayslists = async () => {
    try {
      const response = await appApi.get<PopularPlaylistResponse>(
        "browse/featured-playlists?country=BR&limit=10"
      );

      setPopularPlaylists(response.data.playlists.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnLogout = (): void => {
    dispatch(removeAuthData());
  };

  const handleOnGoToAlbum = (albumId: string): void => {
    navigation.navigate(Routes.Album, {
      albumId,
    });
  };

  useEffect(() => {
    handleGetNewReleases();
    handleGetRecentlyPlayed();
    handleGetUserTopArtists();
    handleGetPopularPlayslists();
  }, []);

  return (
    <HomeContainer
      newReleases={newReleases}
      recentlyPlayed={recentlyPlayed}
      onLogout={handleOnLogout}
      userTopArtists={userTopArtists}
      popularPlaylists={popularPlaylists}
      onGoToAlbum={handleOnGoToAlbum}
    />
  );
}

export default HomeScreen;
