import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #121212;
  flex: 1;
`;

export const AlbumInfo = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const AlbumCover = styled.Image`
  height: 190px;
  width: 190px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: OpenSans_700Bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
`;

export const Author = styled.Text`
  font-family: OpenSans_400Regular;
  font-size: 10px;
  color: #fff;
  text-transform: uppercase;
`;

export const AuthorInfo = styled.Text``;

export const Songs = styled.View``;

export const PlayAlbumLogo = styled.View`
  align-self: center;
`;

export const ReleaseDate = styled.Text`
  font-family: OpenSans_600SemiBold;
  color: #fff;
  font-size: 15px;
`;

export const NumberOfSongs = styled.Text`
  font-family: OpenSans_600SemiBold;
  color: #fff;
  font-size: 15px;
`;
