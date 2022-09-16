import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BaseShare from "../../../shared/BaseShare";

import { useAppDispatch, useAppSelector } from "../../../../store/redux";
import { setSearchType } from "../../../../store/search/searchCreators";
import ISearchRequest from "../../../../models/requests/ISearchRequest.interface";
import { SearchType } from "../../../../models/SearchType.enum";

const Header = () => {
  const dispatch = useAppDispatch();

  const searchType = useAppSelector((state) => state.search.searchType);
  const searchText = useAppSelector((state) => state.search.searchText);

  const onChangeType = async (value: string) => {
    const data: ISearchRequest = {
      searchText,
      searchType: value,
      page: 1,
    };
    dispatch(setSearchType(data));
  };

  return (
    <AppBar position="static" style={{ background: "#161b22" }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          GitHub lite
        </Typography>
        <BaseShare.SearchInput />
        <Button
          onClick={() => onChangeType(SearchType.Users)}
          variant={searchType === SearchType.Users ? "contained" : "outlined"}
          sx={{ marginLeft: "20px", marginRight: "20px" }}
        >
          Users
        </Button>
        <Typography variant="subtitle2" noWrap component="div">
          OR
        </Typography>
        <Button
          onClick={() => onChangeType(SearchType.Repository)}
          variant={
            searchType === SearchType.Repository ? "contained" : "outlined"
          }
          sx={{ marginLeft: "20px", marginRight: "20px" }}
        >
          Repositories
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
