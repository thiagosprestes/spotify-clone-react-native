import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  AlbumCover,
  Artist,
  Container,
  Info,
  Name,
  IconContainer,
} from "./styles";

interface SongItemProps {
  name: string;
  artist: string;
  isPlaylist: boolean;
  cover?: string;
}

const SongItem = ({ name, artist, isPlaylist, cover }: SongItemProps) => {
  return (
    <Container>
      {isPlaylist && (
        <AlbumCover
          source={{
            uri: cover,
          }}
        />
      )}
      <Info>
        <Name>{name}</Name>
        <Artist>{artist}</Artist>
      </Info>
      <IconContainer>
        <SimpleLineIcons name="options-vertical" size={14} color="#aaaaaa" />
      </IconContainer>
    </Container>
  );
};

export default SongItem;
