import Box from "@mui/material/Box";
import React, { useState } from "react";
import {
  List,
  Link,
  ListItemText,
  ListItemIcon,
  Stack,
  Chip,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import InfiniteScroll from "react-infinite-scroll-component";
import RepositoryIcon from "@mui/icons-material/BookOutlined";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import DataInterface from "../../../models/DataInterface.interface";
import IDataItem from "../../../models/IDataItem.interface";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { searchGithub } from "../../../store/search/searchCreators";
import ISearchRequest from "../../../models/requests/ISearchRequest.interface";
import Loader from "../Loader/Loader";
import { SearchType } from "../../../models/SearchType.enum";

interface DataProps {
  data: DataInterface;
}

const DataList = ({ data }: DataProps) => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const { searchType, searchText } = useAppSelector((state) => state.search);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const requestDatsa: ISearchRequest = {
      searchText,
      searchType,
      page: page + 1,
    };
    return dispatch(searchGithub(requestDatsa));
  };

  return (
    <InfiniteScroll
      dataLength={data.items.length}
      next={fetchMoreData}
      hasMore={data.items.length !== data.total_count}
      loader={<Loader />}
    >
      <List sx={{ width: "100%", padding: "20px" }}>
        {data.items.map((value: IDataItem) => (
          <Box key={value.id}>
            <ListItemButton alignItems="center" sx={{ padding: "20px" }}>
              {searchType === SearchType.Repository ? (
                <>
                  <ListItemIcon>
                    <RepositoryIcon
                      sx={{ color: "#c9d1d9" }}
                      fontSize="large"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <>
                        <Stack
                          alignItems="center"
                          // paddingTop="20px"
                          direction="row"
                          spacing={1}
                        >
                          <Link
                            href={value.html_url}
                            rel="noreferrer"
                            target="_blank"
                            variant="h5"
                            paddingRight="10px"
                          >
                            {" "}
                            {value.full_name}
                          </Link>

                          <Chip
                            sx={{ color: "#d29922", borderColor: "#9e6a03" }}
                            label={value.private ? "Private" : "Public"}
                            variant="outlined"
                          />
                        </Stack>
                        <Typography
                          color="#c9d1d9"
                          variant="h6"
                          paddingRight="10px"
                        >
                          {value.owner.login}
                        </Typography>
                      </>
                    }
                    sx={{ color: "black" }}
                    secondary={
                      <Stack
                        alignItems="center"
                        paddingTop="20px"
                        direction="row"
                        spacing={1}
                      >
                        {value.language && (
                          <Chip
                            sx={{
                              background: "#388bfd26",
                              borderColor: "transparent",
                              color: "#58a6ff",
                            }}
                            key={value.language}
                            label={value.language}
                            variant="outlined"
                          />
                        )}
                        <Box display="flex">
                          <ForkRightIcon sx={{ color: "#c9d1d9" }} />
                          <Typography
                            color="#c9d1d9"
                            variant="body1"
                            paddingRight="10px"
                          >
                            {value.forks} forks
                          </Typography>
                        </Box>
                      </Stack>
                    }
                  />
                </>
              ) : (
                <>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="Remy Sharp"
                      src={value.avatar_url}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ color: "black" }}
                    primary={
                      <Link
                        href={value.html_url}
                        rel="noreferrer"
                        target="_blank"
                        variant="h5"
                        paddingLeft="20px"
                      >
                        {value.login}
                      </Link>
                    }
                  />
                </>
              )}
            </ListItemButton>
            <Divider
              sx={{ bgcolor: "#30363d" }}
              variant="middle"
              component="li"
            />
          </Box>
        ))}
      </List>
    </InfiniteScroll>
  );
};

export default DataList;
