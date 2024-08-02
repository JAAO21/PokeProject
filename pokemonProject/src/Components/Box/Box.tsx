import React, { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";

interface BoxProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
}

const BoxComponent: FC<BoxProps> = ({ children, sx, className }) => {
  return (
    <Box sx={sx} className={className}>
      {children}
    </Box>
  );
};

export default BoxComponent;
