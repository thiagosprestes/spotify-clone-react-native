import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import { AlbumCover, Artist, Container, Info, Name } from "./styles";

interface SongItemProps {
  name: string;
  artist: string;
}

const SongItem = ({ name, artist }: SongItemProps) => {
  return (
    <Container>
      {/* <AlbumCover /> */}
      <Info>
        <Name>{name}</Name>
        <Artist>{artist}</Artist>
      </Info>
      <SimpleLineIcons name="options-vertical" size={18} color="#e5e5e5" />
    </Container>
  );
};

export default SongItem;
