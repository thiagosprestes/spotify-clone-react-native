import SimpleLineIcons from "@expo/vector-icons/build/SimpleLineIcons";
import React from "react";
import { View } from "react-native";
import Text, { FontType } from "~/components/Text";
import { ArtistTopTracks } from "~/models/Artist";

import {
  Container,
  SongsList,
  Song,
  Number,
  Cover,
  SongInfo,
  Name,
  AlbumName,
  IconContainer,
} from "./styles";

interface ArtistTopSongsProps {
  tracks?: ArtistTopTracks[];
}

const ArtistTopSongs = ({ tracks }: ArtistTopSongsProps) => {
  return (
    // <Container>
    <SongsList<React.ElementType>
      data={tracks}
      renderItem={({ item, index }: { item: ArtistTopTracks }) => (
        <Song>
          <Text type={FontType.regular}>
            <Number>{index + 1}</Number>
          </Text>
          <Cover source={{ uri: item.album.images[0].url }} />
          <SongInfo>
            <Text type={FontType.regular}>
              <Name>{item.name}</Name>
            </Text>
            <Text type={FontType.regular}>
              <AlbumName numberOfLines={1} ellipsizeMode="tail">
                {item.album.name}{" "}
              </AlbumName>
            </Text>
          </SongInfo>
          <IconContainer>
            <SimpleLineIcons
              name="options-vertical"
              size={14}
              color="#aaaaaa"
            />
          </IconContainer>
        </Song>
      )}
    />
    // </Container>
  );
};

export default ArtistTopSongs;
