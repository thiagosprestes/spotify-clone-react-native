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

function Home() {
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
      <Title>Músicas populares</Title>
      <ItemsList
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
      />
      <Title>Artistas populares</Title>
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
      <Title>Playlists em alta</Title>
      <ItemsList
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
      />
    </Container>
  );
}

export default Home;
