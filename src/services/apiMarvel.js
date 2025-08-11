import axios from "axios";
import md5 from "md5";

const KEY1 = import.meta.env.VITE_KEY1;
const KEY2 = import.meta.env.VITE_KEY2;
const TS = new Date().getTime();
const HASH = md5(TS + KEY2 + KEY1);

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  params: {
    apikey: KEY1,
    hash: HASH,
    ts: TS,
  },
});

export const getComics = async (offset = 0) => {
  const response = await api.get("/comics");

  const comics = response.data.data.results.map((comic) => ({
    ...comic,
    isRare: Math.random() < 0.1,
    price: comic.prices?.[0]?.price || Number((Math.random() * 50 + 10).toFixed(2))  
  }));

  return comics;
}

export const getComicById = async (id) => {
  const response = await api.get(`/comics/${id}`, {
    params: { 
      ts: TS,
      apikey: KEY1,
      hash: HASH,
    },  
  });

  const comic = response.data.data.results[0];

  return {
    ...comic,
    isRare: Math.random() < 0.1,
    price: comic.prices?.[0]?.price || Number((Math.random() * 50 + 10).toFixed(2))
  };
};
