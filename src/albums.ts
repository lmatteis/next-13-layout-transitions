interface Album {
  id: number;
  title: string;
  band: string;
  coverLink: string;
}

const beatlesAlbums: Album[] = [
  {
    id: 1,
    title: "Please Please Me",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",
  },
  {
    id: 2,
    title: "With The Beatles",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg",
  },
  {
    id: 3,
    title: "A Hard Day's Night",
    band: "The Beatles",
    coverLink: "https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg",
  },
  {
    id: 4,
    title: "Beatles for Sale",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/4/40/Beatlesforsale.jpg",
  },
  {
    id: 5,
    title: "Help!",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Help%21_%28The_Beatles_album_-_cover_art%29.jpg",
  },
  {
    id: 6,
    title: "Rubber Soul",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Rubber_Soul.jpg/220px-Rubber_Soul.jpg",
  },
  {
    id: 7,
    title: "Revolver",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Revolver_%28album_cover%29.jpg/220px-Revolver_%28album_cover%29.jpg",
  },
  {
    id: 8,
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    band: "The Beatles",
    coverLink:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",
  },
];

export default beatlesAlbums;
