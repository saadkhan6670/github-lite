import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { List, Link } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DataInterface from "../../../models/DataInterface.interface";
import UserDataItemInterface from "../../../models/UserDataItemInterface.interface";

interface userDataProps {
  data: DataInterface;
}

const UserDataList = ({ data }: userDataProps) => {
  return (
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
          <Divider  sx={{ bgcolor: "#30363d" }}
            variant="middle" component="li" />
        </Box>
      ))}
    </List>
  );
};

export default UserDataList;
