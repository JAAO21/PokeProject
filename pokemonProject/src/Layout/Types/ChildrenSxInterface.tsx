import { SxProps, Theme } from "@mui/material";
export interface ChildrenSxInterface {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
}
