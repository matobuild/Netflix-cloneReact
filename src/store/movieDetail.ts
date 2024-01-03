import { create } from "zustand"
import { DetailResponse } from "../interface/movieDetail"

const initDetailStore: movieTypeDetailsData = {
  data: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: undefined,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  loading: false,
  error: undefined,
}

type movieTypeDetailsData = {
  data: DetailResponse
  loading: boolean
  error: null | any
}

type useDetailStoreType = {
  detail: movieTypeDetailsData
  setDetailStore: (value: movieTypeDetailsData) => void
}

export const useDetailStore = create<useDetailStoreType>((set) => ({
  detail: initDetailStore,
  setDetailStore: (value: movieTypeDetailsData) =>
    set(() => ({ detail: value })),
}))
