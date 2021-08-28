import React from "react";
import { FlatList } from "react-native";
import { create } from "react-test-renderer";
import HomeContainer from "..";
import {
  newReleasesMock,
  popularPlaylistsMock,
  recentlyPlayedMock,
  userTopArtistsMock,
} from "./homeItemsMock";

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  return {
    AntDesign: View,
  };
});

describe("HomeContainer test", () => {
  const mockOnLogout = jest.fn();

  const containerInstance = create(
    <HomeContainer
      recentlyPlayed={recentlyPlayedMock}
      newReleases={newReleasesMock}
      userTopArtists={userTopArtistsMock}
      popularPlaylists={popularPlaylistsMock}
      onGoToAlbum={() => undefined}
      onLogout={mockOnLogout}
    />
  ).root;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("HomeContainer should be rendered", () => {
    const snapshotContainerInstance = create(
      <HomeContainer
        newReleases={newReleasesMock}
        recentlyPlayed={recentlyPlayedMock}
        userTopArtists={userTopArtistsMock}
        popularPlaylists={popularPlaylistsMock}
        onGoToAlbum={() => undefined}
        onLogout={() => undefined}
      />
    ).toJSON();

    expect(snapshotContainerInstance).toMatchSnapshot();
  });

  test("onLogout should be called", () => {
    containerInstance.findByProps({ name: "setting" }).props.onPress();

    expect(mockOnLogout).toBeCalled();
  });

  test("it should be able to get recently listened albuns", () => {
    expect(containerInstance.props.recentlyPlayed).toEqual(recentlyPlayedMock);
  });

  test("it should be able to get new releases", () => {
    expect(containerInstance.props.newReleases).toEqual(newReleasesMock);
  });

  test("it should be able to get user top artists", () => {
    expect(containerInstance.props.userTopArtists).toEqual(userTopArtistsMock);
  });

  test("it should be able to get popular playlists", () => {
    expect(containerInstance.props.popularPlaylists).toEqual(
      popularPlaylistsMock
    );
  });
});
