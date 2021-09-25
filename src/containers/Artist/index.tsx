import React from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Name,
  ListenersNumber,
  PlayButton,
  PlayButtonText,
  PopularLabel,
  Header,
} from "./styles";

import Text, { FontType } from "~/components/Text";
import ArtistTopSongs from "./components/ArtistTopSongs";
import { Artist, ArtistTopTracks } from "~/models/Artist";
import { States } from "~/models/States";

interface ArtistContainerProps {
  state: States;
  artist?: Artist;
  artistTopTracks?: ArtistTopTracks[];
}

const ArtistContainer = ({
  state,
  artist,
  artistTopTracks,
}: ArtistContainerProps) => {
  const renderContent = () => (
    <ScrollView>
      <Header>
        <Name>
          <Text type={FontType.bold}>{artist?.name}</Text>
        </Name>
        <PlayButton>
          <PlayButtonText>
            <Text type={FontType.bold}>TOCAR</Text>
          </PlayButtonText>
        </PlayButton>
        <PopularLabel>
          <Text type={FontType.bold}>Popular</Text>
        </PopularLabel>
      </Header>
      <ArtistTopSongs tracks={artistTopTracks} />
    </ScrollView>
  );

  return (
    <Container>
      {
        {
          [States.default]: renderContent(),
          [States.error]: <Text type={FontType.regular}>A</Text>,
          [States.loading]: <Text type={FontType.regular}>A</Text>,
        }[state]
      }
    </Container>
  );
};

export default ArtistContainer;
