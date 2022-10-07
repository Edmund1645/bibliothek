import axios from "axios";
import { SearchAPIResponse } from "../@types/search";

const searchApi = axios.create({
  baseURL: "https://openlibrary.org/search.json",
});

export const searchBookByTitle = (title: string) => {
  return searchApi.get<SearchAPIResponse>("", {
    params: {
      title: encodeURIComponent(title),
    },
  });
};
