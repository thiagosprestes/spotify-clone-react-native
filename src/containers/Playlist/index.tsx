import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SongItem from "~/components/SongItem";
import { Container } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import {
  AlbumCover,
  AlbumInfo,
  Author,
  PlayAlbumLogo,
  Songs,
} from "../Album/styles";
import { Title } from "../Home/styles";
import { Playlist, PlaylistTracks } from "~/models/Playlist";
import { States } from "~/models/States";

interface AlbumProps {
  playlist?: Playlist;
  state: States;
}

const PlaylistContainer = ({ playlist, state }: AlbumProps) => {
  const renderContent = () => (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <AlbumInfo>
        <AlbumCover source={{ uri: playlist?.images[0].url }} />
        <Title>{playlist?.name}</Title>
        <Author>DE {playlist?.owner.id}</Author>
      </AlbumInfo>
      <Songs>
        <FlatList
          data={playlist?.tracks.items}
          renderItem={({ item }) => (
            <SongItem
              artist={item.track.artists[0].name}
              name={item.track.name}
              isPlaylist
              cover={item.track.album.images[0].url}
            />
          )}
        />
      </Songs>
    </ScrollView>
  );

  return (
    <Container>
      {
        {
          [States.default]: renderContent(),
          [States.loading]: <Text>Loading</Text>,
          [States.error]: <Text>Error</Text>,
        }[state]
      }
    </Container>
  );
};

export default PlaylistContainer;
