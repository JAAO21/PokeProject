import React, { FC } from "react";
import { Box } from "@mui/material";
import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";

const BoxComponent: FC<ChildrenSxInterface> = ({ children, sx, className }) => {
  return (
    <Box sx={sx} className={className}>
      {children}
    </Box>
  );
};

export default BoxComponent;
