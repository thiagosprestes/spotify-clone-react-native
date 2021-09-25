import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SongItem from "~/components/SongItem";
import { Album, AlbumTrack } from "~/models/Album";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  AlbumCover,
  AlbumInfo,
  Author,
  Container,
  PlayAlbumLogo,
  Songs,
  Title,
  ReleaseDate,
  NumberOfSongs,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { States } from "~/models/States";

interface AlbumProps {
  album?: Album;
  state: States;
}

const AlbumContainer = ({ album, state }: AlbumProps) => {
  const renderContent = () => (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <AlbumInfo>
        <AlbumCover source={{ uri: album?.images[0].url }} />
        <Title>{album?.name}</Title>
        <Author>{album?.artists[0].name}</Author>
      </AlbumInfo>
      <Songs>
        <FlatList
          data={album?.tracks.items}
          renderItem={(track) => (
            <SongItem
              artist={track.item.artists[0].name}
              name={track.item.name}
              isPlaylist={false}
            />
          )}
        />
      </Songs>
      <ReleaseDate>
        {album?.release_date &&
          format(new Date(album?.release_date), "d 'de' MMMM 'de' y", {
            locale: ptBR,
          })}
      </ReleaseDate>
      <NumberOfSongs>{album?.total_tracks} músicas</NumberOfSongs>
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

export default AlbumContainer;
