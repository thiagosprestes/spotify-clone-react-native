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
import { getHours } from "date-fns";

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
  const [salute, setSalute] = useState("");

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

  const handleOnGoToPlaylist = (playlistId: string): void => {
    navigation.navigate(Routes.Playlist, {
      playlistId,
    });
  };

  const handleOnGetDayPeriod = () => {
    const hour = getHours(new Date());

    if (hour >= 5) {
      setSalute("Bom dia!");
    } else if (hour >= 12) {
      setSalute("Boa tarde!");
    } else if (hour >= 18) {
      setSalute("Boa noite!");
    }
  };

  const handleOnGoToArtist = (artistId: string): void => {
    navigation.navigate(Routes.Artist, {
      artistId,
    });
  };

  useEffect(() => {
    handleGetNewReleases();
    handleGetRecentlyPlayed();
    handleGetUserTopArtists();
    handleGetPopularPlayslists();
    handleOnGetDayPeriod();
  }, []);

  return (
    <HomeContainer
      newReleases={newReleases}
      recentlyPlayed={recentlyPlayed}
      onLogout={handleOnLogout}
      userTopArtists={userTopArtists}
      popularPlaylists={popularPlaylists}
      onGoToAlbum={handleOnGoToAlbum}
      onGoToPlaylist={handleOnGoToPlaylist}
      onGoToArtist={handleOnGoToArtist}
      salute={salute}
    />
  );
}

export default HomeScreen;
