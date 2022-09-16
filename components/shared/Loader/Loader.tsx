import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Skeleton } from "@mui/material";

const UserDataList = () => {
  return (
    <List sx={{ width: "100%" }}>
      {new Array(10).fill(1).map(() => (
        <Box>
          <ListItemButton alignItems="center" sx={{ padding: "20px" }}>
            <ListItemAvatar>
              <Skeleton sx={{ bgcolor: "grey.800" }} variant="circular">
                <Avatar />
              </Skeleton>
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "black" }}
              primary={
                <Skeleton sx={{ bgcolor: "grey.800" }} width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              }
            />
          </ListItemButton>
          <Divider variant="inset" component="li" />
        </Box>
      ))}
    </List>
  );
};

export default UserDataList;
