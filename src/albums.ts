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
    coverLink: "https://example.com/beatles-for-sale.jpg",
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
    coverLink: "https://example.com/rubber-soul.jpg",
  },
  {
    id: 7,
    title: "Revolver",
    band: "The Beatles",
    coverLink: "https://example.com/revolver.jpg",
  },
  {
    id: 8,
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    band: "The Beatles",
    coverLink: "https://example.com/sgt-peppers.jpg",
  },
];

export default beatlesAlbums;
