import ISearchRequest from "../models/requests/ISearchRequest.interface";
import DataInterface from "../models/DataInterface.interface";
import { axiosInstance } from ".";

export default {
  async search(body: ISearchRequest): Promise<DataInterface> {
    try {
      const response = await axiosInstance.get(
        `/search/${body.searchType}?q=${body.searchText}&page=${body.page}`
      );
      return response.data as DataInterface;
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        return { message: "Connection timed out" };
      }
      if (error.response?.data) {
        return error.response.data;
      }
      return false;
    }
  },
};
