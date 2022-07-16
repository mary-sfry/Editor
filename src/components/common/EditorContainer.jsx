import React from "react";
import { Grid, Box } from "@mui/material";

const EditorContainer = ({ children }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item xs={11} md={10} lg={9}>
        <Box sx={{ bgcolor: "background.paper", borderRadius: 1, p: 2 }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditorContainer;
