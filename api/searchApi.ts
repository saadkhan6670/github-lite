import axios from "axios";
import ISearchRequest from "../models/requests/ISearchRequest.interface";
import DataInterface from "../models/DataInterface.interface";

export default {
  async search(body: ISearchRequest): Promise<DataInterface> {
    try {
      const response = await axios.get(
        `https://api.github.com/search/${body.searchType}?q=${body.searchText}&page=${body.page}`
      );
      return response.data as DataInterface;
    } catch (error) {
      return error;
    }
  },
};
