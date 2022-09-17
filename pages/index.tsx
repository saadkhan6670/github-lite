import type { NextPage } from "next";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BaseShare from "../components/shared/BaseShare";
import { useAppSelector, useAppDispatch } from "../store/redux";
import { searchSlice } from "../store/search/searchReducer";

const Home: NextPage = () => {
  const {
    searchType,
    errorMessage,
    showToast,
    loading,
    searchResults,
    searchText,
  } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const renderView = () => {
    if (loading) {
      return <BaseShare.Loader />;
    }
    if (searchResults.total_count === 0 && searchText !== "") {
      return (
        <Box
          padding="200px 0px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SearchOutlinedIcon fontSize="large" />
          <Typography variant="h4" noWrap component="div">
            We couldn’t find any {searchType} matching &apos;{searchText}&apos;
          </Typography>
        </Box>
      );
    }
    if (searchResults.total_count > 0) {
      return <BaseShare.DataList data={searchResults} />;
    }

    return (
      <Box
        padding="200px 0px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" padding="20px" noWrap component="div">
          Search a Github user or repository
        </Typography>
      </Box>
    );
  };

  return (
    <>
      {renderView()}
      <BaseShare.CustomSnackbar
        errorMessage={errorMessage}
        showToast={showToast}
        onClose={() =>
          dispatch(
            searchSlice.actions.setErrorMessage({
              errorMessage: "",
              showToast: false,
            })
          )
        }
      />
    </>
  );
};

export default Home;
