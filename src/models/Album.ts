export interface AlbumArtist {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface AlbumImage {
  height: number;
  url: string;
  width: number;
}

export interface AlbumTrack {
  artists: AlbumArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: AlbumArtist[];
  available_markets: string[];
  external_urls?: {
    spotify: string;
  };
  href?: string;
  id: string;
  images: AlbumImage[];
  name: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
  tracks: {
    href: string;
    items: AlbumTrack[];
  };
}

export interface NewReleasesResponse {
  albums: {
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
  };
}
