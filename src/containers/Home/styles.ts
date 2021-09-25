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
  color: #fff;
`;

export const RecentlyListenedAlbuns = styled.FlatList`
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const RecentlyListenedAlbum = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #282828;
  align-items: center;
  border-radius: 4px;
  width: 48%;
  margin-bottom: 15px;
`;

export const AlbumCover = styled.Image`
  width: 50px;
  height: 50px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AlbumTitle = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 12px;
  margin-left: 10px;
  color: #fff;
  width: 100px;
`;

export const ItemsList = styled.FlatList`
  padding-left: 20px;
  margin-top: 20px;
`;

export const Item = styled.TouchableOpacity`
  margin-right: 20px;
  margin-bottom: 25px;
`;

export const ItemCover = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const Itemtitle = styled.Text`
  margin-top: 10px;
  font-family: OpenSans_700Bold;
  font-size: 14px;
  color: #fff;
  width: 150px;
`;

export const ItemArtist = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: 12px;
  color: #fff;
  width: 150px;
`;

export const ArtistCover = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;
