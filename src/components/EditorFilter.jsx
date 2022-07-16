import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { FilteredImg, Title, BorderedBox } from "./";
import { filterContext } from "../context/FilterContext";

const EditorFilter = () => {
  const { data } = useContext(filterContext);

  return (
    <>
      <Title color="#16C2D2">فیلترها</Title>
      <BorderedBox>
        <Grid container spacing={2}>
          {data.map((item) => (
            <FilteredImg key={item.id} item={item} />
          ))}
        </Grid>
      </BorderedBox>
    </>
  );
};

export default EditorFilter;
