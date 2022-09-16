import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RepositoryIcon from "@mui/icons-material/BookOutlined";
import * as React from "react";
import List from "@mui/material/List";
import { Chip, ListItemIcon, Stack, Link, ListItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import DataInterface from "../../../models/DataInterface.interface";
import RepositoryItemInterface from "../../../models/RepositoryItemInterface.interface";

interface userDataProps {
  data: DataInterface;
}

const RepositoryList = ({ data }: userDataProps) => {
  return (
    <List sx={{ width: "100%", padding: "20px" }}>
      {data.items.map((value: RepositoryItemInterface) => (
        <Box key={value.id}>
          <ListItem alignItems="flex-start" sx={{ padding: "20px" }}>
            <ListItemIcon>
              <RepositoryIcon sx={{ color: "#c9d1d9" }} fontSize="large" />
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
                  <Typography color="#c9d1d9" variant="h6" paddingRight="10px">
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
          </ListItem>
          <Divider
            sx={{ bgcolor: "#30363d" }}
            variant="middle"
            component="li"
          />
        </Box>
      ))}
    </List>
  );
};

export default RepositoryList;
