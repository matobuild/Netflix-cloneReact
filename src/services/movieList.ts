import axios from "../configuration/axios"
import { API_KEY, ListType, BASE_URL, MOVIE_URL, page } from "../utils/constant"
import { handleResponse } from "../utils/handleResponse"
import { IMovieListResponse } from "../interface/movieList"

type IGetMovieListResponse = {
  status: number | undefined
  data?: IMovieListResponse
}

export const ListServices = {
  getMovieHomePageList: async (
    value: ListType
  ): Promise<IGetMovieListResponse> => {
    try {
      const response = await axios.get(MOVIE_URL + "/" + value + API_KEY)
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },

  getListForTHatPage: async (
    value: ListType,
    pageNumber: number
  ): Promise<IGetMovieListResponse> => {
    try {
      const response = await axios.get(value + API_KEY + page + pageNumber)
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },
}
