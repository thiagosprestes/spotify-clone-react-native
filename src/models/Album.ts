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

export interface Album {
  album_type: string;
  artists: AlbumArtist[];
  available_markets: string[];
  external_urls?: {
    spotify: string;
  };
  href?: string;
  id?: string;
  images?: AlbumImage[];
  name?: String;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
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
