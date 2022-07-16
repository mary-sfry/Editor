import React from "react";
import { Button } from "@mui/material";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";

const FlipBox = ({ value, setValue, children }) => {
  return (
    <Button
      sx={{
        px: 3,
        py: 0.5,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      color="primary"
      variant="contained"
      onClick={
        children === "x"
          ? () => setValue((values) => ({ ...values, scaleX: !value }))
          : () => setValue((values) => ({ ...values, scaleY: !value }))
      }
    >
      {children === "x" ? (
        <CgEditFlipH size="40px" color="white" />
      ) : (
        <CgEditFlipV size="40px" color="white" />
      )}
    </Button>
  );
};

export default FlipBox;
