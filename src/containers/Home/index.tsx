import React from "react";
import {
  AlbumCover,
  AlbumTitle,
  Container,
  Title,
  Header,
  RecentlyListenedAlbum,
  RecentlyListenedAlbuns,
  ItemsList,
  Item,
  ItemCover,
  Itemtitle,
  ItemArtist,
  ArtistCover,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Album } from "~/models/Album";
import { RecentlyPlayed } from "~/models/RecentlyPlayed";
import { UserArtist } from "~/models/UserArtist";
import { PopularPlaylist } from "~/models/PopularPlaylist";

interface Props {
  newReleases: Album[];
  recentlyPlayed: RecentlyPlayed[];
  onLogout: () => void;
  userTopArtists: UserArtist[];
  popularPlaylists: PopularPlaylist[];
}

function HomeContainer({
  newReleases,
  recentlyPlayed,
  onLogout,
  userTopArtists,
  popularPlaylists,
}: Props) {
  return (
    <Container>
      <Header>
        <AntDesign
          name="setting"
          size={24}
          color="#fff"
          style={{ marginLeft: "auto" }}
          onPress={onLogout}
        />
        <Title>Boa noite!</Title>
      </Header>
      <RecentlyListenedAlbuns<React.ElementType>
        numColumns={2}
        data={recentlyPlayed}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item: RecentlyPlayed) => item.track.id}
        renderItem={({ item }: { item: RecentlyPlayed }) => (
          <RecentlyListenedAlbum>
            <AlbumCover source={{ uri: item.track.album.images[1].url }} />
            <AlbumTitle numberOfLines={1}>{item.track.name}</AlbumTitle>
          </RecentlyListenedAlbum>
        )}
      />
      <Title>Novos lançamentos</Title>
      <ItemsList<React.ElementType>
        data={newReleases}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Album) => item.id}
        contentContainerStyle={{ paddingRight: 20 }}
        renderItem={({ item }: { item: Album }) => (
          <Item>
            <ItemCover
              source={{
                uri: item.images[0].url,
              }}
            />
            <Itemtitle numberOfLines={1}>{item.name}</Itemtitle>
            {item.artists.length > 1 ? (
              <ItemArtist numberOfLines={1}>
                {item.artists.map(
                  (artist, index) => (index ? ", " : "") + artist.name
                )}
              </ItemArtist>
            ) : (
              <ItemArtist>{item.artists[0].name}</ItemArtist>
            )}
          </Item>
        )}
      />
      <Title>Seus artistas favoritos</Title>
      <ItemsList<React.ElementType>
        data={userTopArtists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: UserArtist) => item.id}
        contentContainerStyle={{ paddingRight: 20 }}
        renderItem={({ item }: { item: UserArtist }) => (
          <Item>
            <ArtistCover source={{ uri: item.images[0].url }} />
            <Itemtitle style={{ textAlign: "center" }}>{item.name}</Itemtitle>
          </Item>
        )}
      />
      <Title>Playlists em alta no Brasil</Title>
      <ItemsList<React.ElementType>
        data={popularPlaylists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Album) => item.id}
        contentContainerStyle={{ paddingRight: 20 }}
        renderItem={({ item }: { item: PopularPlaylist }) => (
          <Item>
            <ItemCover
              source={{
                uri: item.images[0].url,
              }}
            />
            <Itemtitle numberOfLines={1}>{item.name}</Itemtitle>
          </Item>
        )}
      />
    </Container>
  );
}

export default HomeContainer;
