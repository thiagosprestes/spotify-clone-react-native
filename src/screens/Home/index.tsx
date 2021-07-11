import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import HomeContainer from "~/containers/Home";
import { Album } from "~/models/Album";
import { store } from "~/redux/store";
import { appApi } from "~/services/api";

interface NewReleasesResponse {
  albums: {
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
  };
}

function HomeScreen() {
  const [newReleases, setNewReleases] = useState<Album[]>([]);

  const handleGetNewReleases = async () => {
    try {
      const response = await appApi.get<NewReleasesResponse>(
        "browse/new-releases?country=BR&limit=10"
      );

      setNewReleases(response.data.albums.items);
    } catch (error) {
      console.log(error);
      Alert.alert("Ocorreu um erro ao obter os lançamentos mais recentes :(");
    }
  };

  useEffect(() => {
    handleGetNewReleases();
  }, []);

  return <HomeContainer newReleases={newReleases} />;
}

export default HomeScreen;
