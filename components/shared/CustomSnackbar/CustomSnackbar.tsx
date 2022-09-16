import * as React from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackBarProps {
  errorMessage: string;
  onClose: () => void;
  showToast: boolean;
}

const CustomSnackbar = ({
  errorMessage,
  onClose,
  showToast,
}: SnackBarProps) => {
  return (
    <Snackbar open={showToast} autoHideDuration={4000} onClose={onClose}>
      <Alert onClose={onClose} severity="error" sx={{ width: "100%" }}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
