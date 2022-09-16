import { AppDispatch } from "../store";
import { searchSlice } from "./searchReducer";
import searchApi from "../../api/searchApi";
import ISearchRequest from "../../models/requests/ISearchRequest.interface";

export const searchGithub =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.setLoading(true));
    dispatch(
      searchSlice.actions.setSearchedData({
        incomplete_results: true,
        items: [],
        total_count: 0,
      })
    );
    const response = await searchApi.search({ ...body });

    if (response.items !== undefined) {
      dispatch(searchSlice.actions.setSearchedData(response));
    } else if (response.message) {
      dispatch(searchSlice.actions.setErrorMessage(response.message));
    } else {
      dispatch(searchSlice.actions.setErrorMessage("Something went wrong"));
    }

    dispatch(searchSlice.actions.setLoading(false));
  };

export const setSearchMeta =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.setSearchMeta(body));
  };

export const setSearchType =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.setSearchType(body));
    if (body.searchText !== "") {
      dispatch(searchGithub(body));
    }
  };
