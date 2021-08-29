import { Album, AlbumArtist } from "./Album";

export interface RecentlyPlayed {
  track: {
    album: Album;
    artists?: AlbumArtist;
    available_markets?: string[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: {
      isrc?: string;
    };
    external_urls?: {
      spotify?: string;
    };
    href?: string;
    id?: string;
    is_local?: boolean;
    name?: string;
    popularity?: number;
    preview_url?: string;
    track_number?: number;
    type?: string;
    uri?: string;
  };
  played_at: String;
  context: {
    external_urls: {
      spotify: string;
    };
    href: string;
    type: string;
    uri: string;
  };
}

export interface RecentlyPlayedResponse {
  items: RecentlyPlayed[];
  next: string;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}
