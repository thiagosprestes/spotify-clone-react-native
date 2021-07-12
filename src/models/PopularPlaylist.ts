export interface PopularPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    }
  ];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface PopularPlaylistResponse {
  message: string;
  playlists: {
    href: string;
    items: PopularPlaylist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
}
