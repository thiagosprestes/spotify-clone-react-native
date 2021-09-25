import { Album } from "./Album";

export interface Artist {
  name: string;
  images: [
    {
      url: string;
    }
  ];
}

export interface ArtistTopTracks {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  name: string;
  preview_url: string;
  track_number: number;
}
