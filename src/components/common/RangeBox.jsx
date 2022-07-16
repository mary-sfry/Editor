import React from "react";
import { Box, Typography } from "@mui/material";
import { NumberHolder } from "../";

const RangeBox = ({ name, min, max, value, setValue, step }) => {
  let rangeValue = "";
  name === "روشنایی" ? (rangeValue = value * 50) : (rangeValue = value * 0.27);
  const rangeStyle = {
    transform: `translateX(-${rangeValue}%)`,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "#888" }}>{name}</Typography>
      <Box className="slider">
        <Box className="slider__animate" style={rangeStyle}></Box>
        <input
          dir="rtl"
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={
            name === "روشنایی"
              ? (e) =>
                  setValue((values) => ({
                    ...values,
                    brightness: e.target.value,
                  }))
              : (e) =>
                  setValue((values) => ({
                    ...values,
                    rotation: e.target.value,
                  }))
          }
        />
      </Box>

      <NumberHolder> {value} </NumberHolder>
    </Box>
  );
};

export default RangeBox;
