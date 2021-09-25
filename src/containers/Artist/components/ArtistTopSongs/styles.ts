import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const SongsList = styled.FlatList``;

export const Song = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const Number = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const Cover = styled.Image`
  margin-left: 20px;
  margin-right: 10px;
  width: 35px;
  height: 35px;
`;

export const SongInfo = styled.View``;

export const Name = styled.Text`
  color: #fff;
`;

export const AlbumName = styled.Text`
  color: #ccc;
  font-size: 12px;
`;

export const IconContainer = styled.View`
  margin-left: auto;
`;
