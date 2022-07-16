import React, { useContext } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { filterContext } from "../context/FilterContext";
import flowerImg from "../assets/images/flower.jpg";

const FilteredImg = ({ item }) => {
  const { data, setFilterMethod } = useContext(filterContext);

  const filterHandler = (id) => {
    const filterarr = data.filter((filter) => filter.id === id);
    setFilterMethod(filterarr[0].method);
  };

  return (
    <Grid item xs={6} sm={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          overflow:'hidden',
        }}
        onClick={() => filterHandler(item.id)}
      >
        <img
          className="filtered-img"
          src={flowerImg}
          alt=""
          style={{ filter: `${item.method}` }}
        />
        <Typography sx={{ mt: 1, color: "#888" }}>{item.name}</Typography>
      </Box>
    </Grid>
  );
};

export default FilteredImg;
