import Box from "@mui/material/Box";
import React, { useState } from "react";
import { List, Link } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import InfiniteScroll from "react-infinite-scroll-component";
import DataInterface from "../../../models/DataInterface.interface";
import UserDataItemInterface from "../../../models/UserDataItemInterface.interface";
import { useAppDispatch, useAppSelector } from "../../../store/redux";
import { searchGithub } from "../../../store/search/searchCreators";
import ISearchRequest from "../../../models/requests/ISearchRequest.interface";

interface userDataProps {
  data: DataInterface;
}

const UserDataList = ({ data }: userDataProps) => {
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
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >
      <List sx={{ width: "100%", padding: "20px" }}>
        {data.items.map((value: UserDataItemInterface) => (
          <Box key={value.id}>
            <ListItemButton alignItems="center" sx={{ padding: "20px" }}>
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

export default UserDataList;
