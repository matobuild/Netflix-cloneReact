import axios from "axios"
import { API_KEY, BASE_URL, MOVIE_URL } from "../utils/constant"
import { handleResponse } from "../utils/handleResponse"
import { DetailResponse } from "../interface/movieDetail"

type IGetDetailResponse = {
  status: number | undefined
  data?: DetailResponse
}

export const DetailServices = {
  getMovieDetail: async (id: number): Promise<IGetDetailResponse> => {
    try {
      const response = await axios.get(
        BASE_URL + MOVIE_URL + "/" + id + API_KEY
      )
      return handleResponse.success(response)
    } catch (error: any) {
      return handleResponse.error(error)
    }
  },
}
