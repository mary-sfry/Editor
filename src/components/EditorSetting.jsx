import React from "react";
import { Box, Grid } from "@mui/material";
import { BorderedBox, RangeBox, Title, FlipBox } from "./";

const EditorFilter = ({ editorSetting, setEditorSetting }) => {
  const { brightness, rotation, scaleX, scaleY } = editorSetting;

  return (
    <>
      <Title color="#16C2D2">تنظیمات</Title>
      <BorderedBox>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7} md={7} lg={7}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <RangeBox
                  name="روشنایی"
                  min={0}
                  max={2}
                  value={brightness}
                  setValue={setEditorSetting}
                  step={0.1}
                />
              </Grid>
              <Grid item xs={12}>
                <RangeBox
                  name="چرخش"
                  min={0}
                  max={360}
                  value={rotation}
                  setValue={setEditorSetting}
                  step={1}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: 1,
              }}
            >
              <FlipBox value={scaleX} setValue={setEditorSetting}>
                x
              </FlipBox>
              <FlipBox value={scaleY} setValue={setEditorSetting}>
                y
              </FlipBox>
            </Box>
          </Grid>
        </Grid>
      </BorderedBox>
    </>
  );
};

export default EditorFilter;
