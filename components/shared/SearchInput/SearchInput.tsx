import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import {
  searchGithub,
  setSearchMeta,
} from "../../../store/search/searchCreators";
import ISearchRequest from "../../../models/requests/ISearchRequest.interface";
import { debounce } from "../../utils/Helpers";
import { useEffect } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const delayCall = debounce((callback: Function) => {
  callback();
}, 1);

const SearchInput = () => {
  const dispatch = useAppDispatch();

  const searchType = useAppSelector((state) => state.search.searchType);
  const searchText = useAppSelector((state) => state.search.searchText);

  const fetchData = async () => {
    const data: ISearchRequest = {
      searchText,
      searchType,
    };
    dispatch(searchGithub(data));
  };

  useEffect(() => {
    if (searchText !== "") {
      delayCall(() => fetchData());
    }
  }, [searchText]);

  const onChange = async (value: string) => {
    const data: ISearchRequest = {
      searchText: value,
      searchType,
    };
    dispatch(setSearchMeta(data));
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchInput;
