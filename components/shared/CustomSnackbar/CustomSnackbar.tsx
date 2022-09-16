import * as React from "react";
import { Typography, Snackbar, Alert } from "@mui/material";

interface userDataProps {
  errorMessage: string;
  onClose: () => void;
}

const CustomSnackbar = ({ errorMessage, onClose }: userDataProps) => {
  return (
    <Snackbar
      open={errorMessage !== "" ? true : false}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
