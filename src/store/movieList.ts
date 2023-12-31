import { create } from "zustand"
import { MovieDetail } from "../interface/movieList"
import { ListType } from "../utils/constant"

const initStore: Record<ListType, movieTypeDetails> = {
  [ListType.now_playing]: {
    data: [],
    loading: false,
    error: null,
  },
  [ListType.popular]: {
    data: [],
    loading: false,
    error: null,
  },
  [ListType.topRated]: {
    data: [],
    loading: false,
    error: null,
  },
  [ListType.Upcoming]: {
    data: [],
    loading: false,
    error: null,
  },
  [ListType.list]: {
    data: [],
    loading: false,
    error: null,
  },
  [ListType.movieDiscover]: {
    data: [],
    loading: false,
    error: undefined,
  },
  [ListType.tvDiscover]: {
    data: [],
    loading: false,
    error: undefined,
  },
  [ListType.newAndPopular]: {
    data: [],
    loading: false,
    error: undefined,
  },
  [ListType.trending]: {
    data: [],
    loading: false,
    error: undefined,
  },
}

type movieTypeDetails = {
  data: MovieDetail[]
  loading: boolean
  error: null | any
}

type useMovieListStoreType = {
  movie: Record<string, movieTypeDetails>

  setMovieList: (list: ListType, value: movieTypeDetails) => void
}

export const useMovieListStore = create<useMovieListStoreType>((set) => ({
  movie: initStore,

  setMovieList: (list: ListType, value: movieTypeDetails) =>
    set((state) => ({ movie: { ...state.movie, [list]: value } })),
}))
