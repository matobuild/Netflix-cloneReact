import { create } from "zustand"
import { MovieDetail } from "../interface/movieList"

const initStore = {
  movie: {
    data: [],
    loading: false,
    error: null,
  },
}

type movieType = {
  data: MovieDetail[]
  loading: boolean
  error: null | any
}

type useMovieListStoreType = {
  movie: movieType

  setMovieList: (value: movieType) => void
}

export const useMovieListStore = create<useMovieListStoreType>((set) => ({
  ...initStore,
  setMovieList: (value: movieType) => set({ movie: value }),
}))
