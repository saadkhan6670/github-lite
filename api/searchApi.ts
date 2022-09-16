import ISearchRequest from "../models/requests/ISearchRequest.interface";
import DataInterface from "../models/DataInterface.interface";

export default {
  search(body: ISearchRequest) {
    return fetch(
      `https://api.github.com/search/${body.searchType}?q=${body.searchText}`
    )
      .then((res) => res.json())
      .then((response: DataInterface) => {
        console.log("in success" , response);
        return response;
      })
      .catch((error) => {
        console.log("in error",error);
        return error;
      });
  },
};
