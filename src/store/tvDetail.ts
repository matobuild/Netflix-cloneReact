import { create } from "zustand"
import { TVDetailResponse } from "../interface/TvDetails"

const initTvDetailStore: TvTypeDetailsData = {
  data: {
    adult: false,
    backdrop_path: "",
    created_by: [],
    episode_run_time: [],
    first_air_date: "",
    genres: [],
    homepage: "",
    id: 0,
    in_production: false,
    languages: [],
    last_air_date: "",
    last_episode_to_air: {
      id: 0,
      name: "",
      overview: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "",
      episode_number: 0,
      episode_type: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: "",
    },
    name: "",
    next_episode_to_air: {
      id: 0,
      name: "",
      overview: "",
      vote_average: 0,
      vote_count: 0,
      air_date: "",
      episode_number: 0,
      episode_type: "",
      production_code: "",
      runtime: 0,
      season_number: 0,
      show_id: 0,
      still_path: undefined,
    },
    networks: [],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    production_companies: [],
    production_countries: [],
    seasons: [],
    spoken_languages: [],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
  },
  loading: false,
  error: undefined,
}

type TvTypeDetailsData = {
  data: TVDetailResponse
  loading: boolean
  error: null | any
}

type useTvDetailStoreType = {
  tvDetail: TvTypeDetailsData
  setTvDetailStore: (value: TvTypeDetailsData) => void
}

export const useTvDetailStore = create<useTvDetailStoreType>((set) => ({
  tvDetail: initTvDetailStore,
  setTvDetailStore: (value: TvTypeDetailsData) =>
    set(() => ({ tvDetail: value })),
}))
