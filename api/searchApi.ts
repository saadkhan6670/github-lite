import ISearchRequest from "../models/requests/ISearchRequest.interface";
import DataInterface from "../models/DataInterface.interface";

export default {
  search(body: ISearchRequest) {
    return fetch(
      `https://api.github.com/search/${body.searchType}?q=${body.searchText}&page=${body.page}`
    )
      .then((res) => res.json())
      .then((response: DataInterface) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },

  moreDataSearch(body: ISearchRequest) {
    return fetch(
      `https://api.github.com/search/${body.searchType}?q=${body.searchText}&page=${body.page}`
    )
      .then((res) => res.json())
      .then((response: DataInterface) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
};
