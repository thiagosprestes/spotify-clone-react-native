import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const AlbumCover = styled.Image`
  height: 60px;
  width: 60px;
  margin-right: 20px;
`;

export const Info = styled.View``;

export const Name = styled.Text`
  color: #fff;
  font-size: 14px;
  font-family: OpenSans_600SemiBold;
`;

export const Artist = styled.Text`
  color: #e5e5e5;
  font-size: 12px;
  font-family: OpenSans_400Regular;
`;

export const IconContainer = styled.View`
  margin-left: auto;
`;
