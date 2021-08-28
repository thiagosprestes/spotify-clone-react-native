import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import SongItem from "~/components/SongItem";

import {
  AlbumCover,
  AlbumInfo,
  Author,
  AuthorInfo,
  Container,
  Songs,
  Title,
} from "./styles";

const AlbumContainer: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <AlbumInfo>
          <AlbumCover />
          <Title>Titulo</Title>
          <Author>Autor</Author>
        </AlbumInfo>
        <AuthorInfo></AuthorInfo>
      </ScrollView>
      <Songs>
        <SongItem />
      </Songs>
    </Container>
  );
};

export default AlbumContainer;
