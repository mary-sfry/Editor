import React from "react";
import { Box } from "@mui/material";

const BorderedBox = ({ children }) => {
  return (
    <Box sx={{ border: 2, borderRadius: 2, p: 2, borderColor: "#eee" }}>
      {children}
    </Box>
  );
};

export default BorderedBox;
