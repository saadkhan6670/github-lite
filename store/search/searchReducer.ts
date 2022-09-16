import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DataInterface from "../../models/DataInterface.interface";

// Type for our state
export interface SearchState {
  searchText: string;
  searchType: string;
  searchResults: DataInterface;
  loading: boolean;
  errorMessage: string;
}

// Type for our state
export interface SearchMeta {
  searchText: string;
  searchType: string;
}

// Initial state
const initialState: SearchState = {
  searchText: "",
  searchType: "users",
  searchResults: {
    incomplete_results: false,
    items: [],
    total_count: 0,
  },
  loading: false,
  errorMessage: "",
};

// Actual Slice
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Action to set the search text
    setSearchText(state, action: PayloadAction<SearchMeta>) {
      state.searchText = action.payload.searchText;
    },

    setSearchType(state, action: PayloadAction<SearchMeta>) {
      state.searchType = action.payload.searchType;
    },

    setSearchedData(state, action: PayloadAction<DataInterface>) {
      state.searchResults = action.payload;
    },

    setMoreData(state, action: PayloadAction<DataInterface>) {
      state.searchResults.incomplete_results =
        action.payload.incomplete_results;

      state.searchResults.total_count = action.payload.total_count;

      state.searchResults.items = [
        ...state.searchResults.items,
        ...action.payload.items,
      ];
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setErrorMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },

  },
});

export default searchSlice.reducer;
