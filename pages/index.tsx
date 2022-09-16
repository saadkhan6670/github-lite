import type { NextPage } from "next";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BaseShare from "../components/shared/BaseShare";
import { useAppSelector } from "../store/redux";
import { searchSlice } from "../store/search/searchReducer";
import { SearchType } from "../models/SearchType.enum";

const Home: NextPage = () => {
  const { searchType, errorMessage, loading, searchResults, searchText } =
    useAppSelector((state) => state.search);

  const renderView = () => {
    if (searchText === "" || errorMessage !== "") {
      return (
        <Box padding="200px 0px">
          <Typography variant="h4" padding="20px" noWrap component="div">
            Search a Github user or repository
          </Typography>
        </Box>
      );
    }
    if (loading) {
      return <BaseShare.Loader />;
    }

    if (searchResults.total_count === 0) {
      return (
        <Box padding="200px 0px">
          <SearchOutlinedIcon sx={{ width: "100%" }} fontSize="large" />
          <Typography variant="h4" noWrap component="div">
            We couldn’t find any {searchType} matching &apos;{searchText}&apos;
          </Typography>
        </Box>
      );
    }
    if (searchType === SearchType.Users) {
      return <BaseShare.UserDataList data={searchResults} />;
    }
    if (searchType === SearchType.Repository) {
      return <BaseShare.RepositoryList data={searchResults} />;
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {renderView()}
      <BaseShare.CustomSnackbar
        errorMessage={errorMessage}
        onClose={() => searchSlice.actions.setErrorMessage("")}
      />
    </Box>
  );
};

export default Home;
