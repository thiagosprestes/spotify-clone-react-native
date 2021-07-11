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

interface Props {
  newReleases: Album[];
}

function HomeContainer({ newReleases }: Props) {
  const test = [
    { label: "avbr" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
  ];

  const items = [
    { label: "avbr" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
    { label: "vrum" },
  ];

  return (
    <Container>
      <Header>
        <AntDesign
          name="setting"
          size={24}
          color="#fff"
          style={{ marginLeft: "auto" }}
        />
        <Title>Boa noite!</Title>
      </Header>
      <RecentlyListenedAlbuns
        numColumns={2}
        data={test}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={() => (
          <RecentlyListenedAlbum>
            <AlbumCover />
            <AlbumTitle>Nome do album</AlbumTitle>
          </RecentlyListenedAlbum>
        )}
      />
      <Title>Novos lançamentos</Title>
      <ItemsList<React.ElementType>
        data={newReleases}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
      {/* <Title>Artistas populares</Title>
      <ItemsList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <Item>
            <ArtistCover />
            <Itemtitle style={{ textAlign: "center" }}>Abc</Itemtitle>
          </Item>
        )}
      />
      <Title>Playlists em alta</Title> */}
      {/* <ItemsList
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <Item>
            <ItemCover />
            <Itemtitle>Abc</Itemtitle>
            <ItemArtist>Abc</ItemArtist>
          </Item>
        )}
      /> */}
    </Container>
  );
}

export default HomeContainer;
