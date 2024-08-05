import { SxProps, Theme } from "@mui/material";
export interface ChildrenSxInterface {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  className?: string;
  variant?:
    | "inherit"
    | "button"
    | "caption"
    | "overline"
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  component?: React.ElementType;
}
