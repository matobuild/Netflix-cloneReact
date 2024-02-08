import { create } from "zustand"
import { MovieDetailResponse } from "../interface/movieDetail"

const initMovieDetailStore: movieTypeDetailsData = {
  data: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      id: 0,
      name: "",
      poster_path: "",
      backdrop_path: "",
    },
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
  data: MovieDetailResponse
  loading: boolean
  error: null | any
}

type useMovieDetailStoreType = {
  movieDetail: movieTypeDetailsData
  setMovieDetailStore: (value: movieTypeDetailsData) => void
}

export const useMovieDetailStore = create<useMovieDetailStoreType>((set) => ({
  movieDetail: initMovieDetailStore,
  setMovieDetailStore: (value: movieTypeDetailsData) =>
    set(() => ({ movieDetail: value })),
}))
