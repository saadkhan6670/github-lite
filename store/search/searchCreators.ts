import { AppDispatch } from "../store";
import { searchSlice } from "./searchReducer";
import searchApi from "../../api/searchApi";
import ISearchRequest from "../../models/requests/ISearchRequest.interface";

export const searchGithub =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    const response = await searchApi.search({ ...body });
    if (response.items !== undefined) {
      if (body.page > 1) {
        dispatch(searchSlice.actions.setMoreData(response));
      } else {
        dispatch(searchSlice.actions.setSearchedData(response));
      }
    } else if (response.message) {
      dispatch(
        searchSlice.actions.setErrorMessage({
          errorMessage: response.message,
          showToast: true,
        })
      );
    } else {
      dispatch(
        searchSlice.actions.setErrorMessage({
          errorMessage: "Something went wrong",
          showToast: true,
        })
      );
    }

    dispatch(searchSlice.actions.setLoading(false));
  };

export const setSearchText =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.setSearchText(body));
    dispatch(searchSlice.actions.setLoading(true));
  };

export const setSearchType =
  (body: ISearchRequest) => async (dispatch: AppDispatch) => {
    dispatch(searchSlice.actions.setSearchType(body));
    if (body.searchText !== "") {
      dispatch(searchSlice.actions.setLoading(true));
      dispatch(
        searchSlice.actions.setSearchedData({
          incomplete_results: true,
          items: [],
          total_count: 0,
        })
      );
      dispatch(searchGithub(body));
    }
  };
