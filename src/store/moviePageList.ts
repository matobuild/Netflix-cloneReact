import { create } from "zustand"
import { IMovieListResponse } from "../interface/movieList"
import { ListType } from "../utils/constant"

const initStore: Record<ListType, movieTypeDetails2> = {
  [ListType.now_playing]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.popular]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.topRated]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.Upcoming]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.list]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.movieDiscover]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.tvDiscover]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.newAndPopular]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
  [ListType.trending]: {
    data: {
      dates: undefined,
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
    },
    loading: false,
    error: null,
  },
}

type movieTypeDetails2 = {
  data: IMovieListResponse
  loading: boolean
  error: null | any
}

type useMoviePageListStoreType = {
  movie2: Record<string, movieTypeDetails2>

  setMovieList2: (list: ListType, value: movieTypeDetails2) => void
}

export const useMoviePageListStore = create<useMoviePageListStoreType>(
  (set) => ({
    movie2: initStore,

    setMovieList2: (list: ListType, value: movieTypeDetails2) =>
      set((state) => ({ movie2: { ...state.movie2, [list]: value } })),
  })
)
