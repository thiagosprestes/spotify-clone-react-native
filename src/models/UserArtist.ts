export interface UserArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href?: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface UserArtistResponse {
  items: UserArtist[];
  total: number;
  limit: number;
  offset: number;
  previous: string;
  href: string;
  next: string;
}
