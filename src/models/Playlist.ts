import { AlbumArtist } from "./Album";

export interface PlaylistTracks {
  track: {
    album: {
      id: string;
      images: [
        {
          height: number;
          url: string;
          width: number;
        },
        {
          height: number;
          url: string;
          width: number;
        },
        {
          height: number;
          url: string;
          width: number;
        }
      ];
      name: string;
    };
    artists: AlbumArtist[];
    explicit: boolean;

    id: string;
    name: string;
    preview_url: string;
  };
}

export interface Playlist {
  images: [
    {
      url: string;
    }
  ];
  name: string;
  owner: {
    id: string;
  };
  tracks: {
    items: PlaylistTracks[];
    total: number;
  };
}
