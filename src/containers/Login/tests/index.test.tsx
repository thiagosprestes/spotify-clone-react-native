import React from "react";
import { TouchableOpacity } from "react-native";
import renderer from "react-test-renderer";
import LoginContainer from "..";

describe("LoginContainer test", () => {
  const mockOnLogin = jest.fn();

  const containerInstance = renderer.create(
    <LoginContainer onLogin={mockOnLogin} />
  ).root;

  test("LoginContainer should be render", () => {
    const snapshotContainerInstance = renderer
      .create(<LoginContainer onLogin={mockOnLogin} />)
      .toJSON();

    expect(snapshotContainerInstance).toMatchSnapshot();
  });

  test("onLogin should be called", () => {
    containerInstance.findByType(TouchableOpacity).props.onPress();

    expect(mockOnLogin).toBeCalled();
  });
});
