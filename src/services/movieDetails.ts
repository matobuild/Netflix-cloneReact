import axios from "../configuration/axios"
import { API_KEY, MOVIE_URL } from "../utils/constant"
import { handleResponse } from "../utils/handleResponse"
import { MovieDetailResponse } from "../interface/movieDetail"

type IGetMovieDetailResponse = {
  status: number | undefined
  data?: MovieDetailResponse
}

export const MovieDetailServices = {
  getMovieDetail: async (id: number): Promise<IGetMovieDetailResponse> => {
    try {
      const response = await axios.get(MOVIE_URL + "/" + id + "?" + API_KEY)
      console.log("movie response", response)

      return handleResponse.success(response)
    } catch (error: any) {
      return handleResponse.error(error)
    }
  },
}
