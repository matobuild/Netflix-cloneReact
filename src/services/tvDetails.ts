import axios from "../configuration/axios"
import { TVDetailResponse } from "../interface/TvDetails"
import { API_KEY, BASE_URL, TV_URL } from "../utils/constant"
import { handleResponse } from "../utils/handleResponse"

type IGetTVDetailResponse = {
  status: number | undefined
  data?: TVDetailResponse
}

export const TvDetailServices = {
  getTvDetail: async (id: number): Promise<IGetTVDetailResponse> => {
    try {
      const response = await axios.get(TV_URL + "/" + id + "?" + API_KEY)
      console.log("TV response", response)

      return handleResponse.success(response)
    } catch (error: any) {
      return handleResponse.error(error)
    }
  },
}
