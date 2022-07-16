import React from "react";
import { Typography, Box } from "@mui/material";

const Title = ({ children, color }) => {
  return (
    <>
      <Typography
        sx={{ color, fontWeight: "bold", mb: 1, display: "inline-block" }}
      >
        {children}
      </Typography>
      {children === "تصویر کالا" ? (
        <Box
          sx={{
            minWidth: "40px",
            maxWidth: "70px",
            borderTop: "6px solid #E64761",
            borderRadius: "30px",
          }}
        ></Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Title;
