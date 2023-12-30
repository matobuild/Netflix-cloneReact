import axios from "axios"
import { API_KEY, ListType, BASE_URL, MOVIE_URL } from "../utils/constant"
import { handleResponse } from "../utils/handleResponse"
import { IMovieListResponse } from "../interface/movieList"

type IGetMovieListResponse = {
  status: number | undefined
  data?: IMovieListResponse
}

export const MovieListServices = {
  getMovieList: async (value: ListType): Promise<IGetMovieListResponse> => {
    try {
      const response = await axios.get(
        BASE_URL + MOVIE_URL + "/" + value + API_KEY
      )
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },
  getMovieDiscoverList: async (
    value: ListType
  ): Promise<IGetMovieListResponse> => {
    try {
      const response = await axios.get(BASE_URL + value + API_KEY)
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },
  getTvDiscoverList: async (
    value: ListType
  ): Promise<IGetMovieListResponse> => {
    try {
      const response = await axios.get(BASE_URL + value + API_KEY)
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },
}
