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
  const response = await api.get("/comics", {
    params: {
      offset,
      limit: 20,
    },
  });
  return response.data;
};
