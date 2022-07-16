import React from "react";
import { Box } from "@mui/material";
import { Title } from "./";

const EditorHeader = () => {
  return (
    <Box sx={{ borderBottom: 2, borderColor: "#eee" }}>
      <Title color="#E64761">تصویر کالا</Title>
    </Box>
  );
};

export default EditorHeader;
