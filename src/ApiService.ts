const api = "https://vidsrc.to/vapi";

export type ItemType = "movie" | "tv";
export type SortType = "new" | "add";

export type ResponseItem = {
  embed_url_imdb: string;
  embed_url_tmdb: string;
  imdb_id: string;
  title: string;
  tmdb_id: string;
  type: ItemType;
};

export const getRndItem = async (
  type: ItemType,
  sortType: SortType
): Promise<ResponseItem> => {
  const page = Math.floor(Math.random() * (1 - 1500) + 1500);
  const randomItem = Math.floor(Math.random() * (0 - 14) + 14);

  const url = `${api}/${type}/${sortType}/${page}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.result.items[randomItem];
};
