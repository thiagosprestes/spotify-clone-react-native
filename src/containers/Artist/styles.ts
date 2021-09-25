import styled from "styled-components/native";
import Text from "~/components/Text";

export const Container = styled.View`
  background-color: #121212;
  flex: 1;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 40px;
  width: 300px;
  text-align: center;
`;

export const ListenersNumber = styled.Text`
  color: #282828;
  font-size: 12px;
  margin: 20px 0;
`;

export const PlayButton = styled.TouchableOpacity`
  background-color: #1db954;
  border-radius: 25px;
  width: 130px;
  padding: 5px;
  margin: 20px 0;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 12px;
`;

export const PopularLabel = styled.Text`
  color: #fff;
`;

export const Header = styled.View`
  align-items: center;
`;
