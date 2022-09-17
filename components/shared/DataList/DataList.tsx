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
  ListItemAvatar,
  ListItemButton,
  Avatar,
} from "@mui/material";
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
import { Colors } from "../../utils/styles/presets";

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
    >
      <List sx={{ width: "100%", padding: "20px" }}>
        {data.items.map((value: IDataItem) => (
          <Box key={value.id}>
            <ListItemButton alignItems="center" sx={{ padding: "20px" }}>
              {searchType === SearchType.Repository ? (
                <>
                  <ListItemIcon>
                    <RepositoryIcon
                      sx={{ color: Colors.lightGray }}
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
                            sx={{
                              color: Colors.goldenYellow,
                              borderColor: Colors.goldenYellowDark,
                            }}
                            label={value.private ? "Private" : "Public"}
                            variant="outlined"
                          />
                        </Stack>
                        <Typography
                          color={Colors.lightGray}
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
                              background: Colors.opaqueBlue,
                              borderColor: "transparent",
                              color: Colors.blue,
                            }}
                            key={value.language}
                            label={value.language}
                            variant="outlined"
                          />
                        )}
                        <Box display="flex">
                          <ForkRightIcon sx={{ color: Colors.lightGray }} />
                          <Typography
                            color={Colors.lightGray}
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
          </Box>
        ))}
      </List>
    </InfiniteScroll>
  );
};

export default DataList;
