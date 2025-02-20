export type ItemType = "movies" | "tvshows";
export type SortType = "latest";

export type ResponseItem = {
  imdb_id: string;
  tmdb_id: number;
  title: string;
  embed_url: string;
  embed_url_tmdb: string;
  quality: string;
  type: "Movie" | "Tv Show";
};

const api = "https://vidsrc.xyz";
// const api = "https://vidsrc.xyz/movies/latest/page-1.json";

export const getRndItem = async (
  type: ItemType,
  sortType: SortType
): Promise<ResponseItem> => {
  const max = type === "movies" ? 1000 : 500;
  const page = Math.floor(Math.random() * (1 - max) + max);

  const url = `${api}/${type}/${sortType}/page-${page}.json`;

  console.log(url);

  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  const randomItem = Math.floor(
    Math.random() * (0 - data.result.length) + data.result.length
  );

  data.type = type === "movies" ? "Movie" : "Tv Show";
  return data.result[randomItem];
};
