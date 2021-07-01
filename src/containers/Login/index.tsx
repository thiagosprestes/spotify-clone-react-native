import React from "react";

import { Container, Button, ButtonText, Logo } from "./styles";

import logo from "~/assets/logo.png";

interface LoginProps {
  onLogin: () => void;
}

function LoginContainer({ onLogin }: LoginProps) {
  return (
    <Container>
      <Logo source={logo} />
      <Button onPress={onLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}

export default LoginContainer;
