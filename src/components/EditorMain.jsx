import React, { useState } from "react";
import { Grid } from "@mui/material";
import { EditorMainImg, EditorFilter, EditorSetting } from "./";
const EditorMain = () => {
  const [editorSetting, setEditorSetting] = useState({
    brightness: 1,
    rotation: 0,
    scaleX: false,
    scaleY: false,
  });

  return (
    <Grid container sx={{ pt: 2 }}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <EditorMainImg editorSetting={editorSetting} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Grid container sx={{ pl: 2, py: { lg: 0, xs: 2 } }} spacing={2}>
          <Grid item xs={12}>
            <EditorFilter />
          </Grid>
          <Grid item xs={12}>
            <EditorSetting
              editorSetting={editorSetting}
              setEditorSetting={setEditorSetting}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditorMain;
