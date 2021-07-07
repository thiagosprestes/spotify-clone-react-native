import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #121212;
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px 0;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 22px;
  padding-left: 20px;
`;

export const RecentlyListenedAlbuns = styled.FlatList`
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const RecentlyListenedAlbum = styled.View`
  flex-direction: row;
  background-color: #282828;
  align-items: center;
  border-radius: 4px;
  width: 48%;
  margin-bottom: 15px;
`;

export const AlbumCover = styled.View`
  width: 50px;
  height: 50px;
  background-color: blue;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AlbumTitle = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 12px;
  margin-left: 10px;
`;

export const ItemsList = styled.FlatList`
  padding-left: 20px;
  margin-top: 20px;
`;

export const Item = styled.View`
  margin-right: 20px;
  margin-bottom: 50px;
`;

export const ItemCover = styled.View`
  width: 150px;
  height: 150px;
  background-color: aqua;
  border-radius: 10px;
`;

export const Itemtitle = styled.Text`
  margin-top: 10px;
  font-family: OpenSans_700Bold;
  font-size: 14px;
`;

export const ItemArtist = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: 12px;
`;

export const ArtistCover = styled.View`
  width: 150px;
  height: 150px;
  background-color: aqua;
  border-radius: ${150 / 2};
`;
