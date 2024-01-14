import axios from "../configuration/axios"
import { ISearchListResponse } from "../interface/searchList"
import { API_KEY, SEARCH } from "../utils/constant"

import { handleResponse } from "../utils/handleResponse"


type IGetSearchListResponse = {
  status: number | undefined
  data?: ISearchListResponse
}

export const ListServices = {
  getSearchPageList: async (
   keyword: string,
  ): Promise<IGetSearchListResponse> => {
    try {
      const response = await axios.get(SEARCH + keyword + "&" +API_KEY)
      console.log(response)
      return handleResponse.success(response)
    } catch (error: any) {
      console.error(error)
      return handleResponse.error(error)
    }
  },