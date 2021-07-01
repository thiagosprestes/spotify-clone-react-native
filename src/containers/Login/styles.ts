import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #121212;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: 260px;
  height: 50px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-family: OpenSans_700Bold;
  font-size: 18px;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 75px;
  margin-bottom: 50px;
`;
