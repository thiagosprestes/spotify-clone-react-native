import React from "react";
import { FlatList } from "react-native";
import SongItem from "~/components/SongItem";
import { AlbumTrack } from "~/models/Album";

import {
  AlbumCover,
  AlbumInfo,
  Author,
  AuthorInfo,
  Container,
  Songs,
  Title,
} from "./styles";

interface AlbumProps {
  cover?: string;
  title?: string;
  author?: string;
  tracks?: AlbumTrack[];
}

const AlbumContainer = ({ cover, title, author, tracks }: AlbumProps) => {
  return (
    <Container>
      <AlbumInfo>
        <AlbumCover source={{ uri: cover }} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </AlbumInfo>
      <Songs>
        <FlatList
          data={tracks}
          renderItem={({ track }: { track: AlbumTrack }) => (
            <SongItem artist={track.artists[0].name} name={track.name} />
          )}
        />
      </Songs>
    </Container>
  );
};

export default AlbumContainer;
