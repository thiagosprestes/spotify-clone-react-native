import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import { AlbumCover, Artist, Container, Info, Name } from "./styles";

const SongItem: React.FC = () => {
  return (
    <Container>
      <AlbumCover />
      <Info>
        <Name>Nome</Name>
        <Artist>Artista</Artist>
      </Info>
      <SimpleLineIcons name="options-vertical" size={24} color="#fff" />
    </Container>
  );
};

export default SongItem;
