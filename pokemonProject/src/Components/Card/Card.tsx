import React, { FC, ReactNode, ReactElement } from "react";
import { Card, CardActions, CardContent } from "@mui/material";

import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";

const isReactElement = (child: ReactNode): child is ReactElement => {
  return typeof child === "object" && child !== null && "type" in child;
};

const CardComponent: FC<ChildrenSxInterface> = ({ children, sx }) => {
  const actionsChildren = React.Children.toArray(children).filter((child) => {
    return isReactElement(child) && child.type === "button"; // Aquí puedes ajustar según el tipo de elemento que desees filtrar
  });

  // Filtrar los children para separar los que irán en CardContent
  const contentChildren = React.Children.toArray(children).filter((child) => {
    return !isReactElement(child) || child.type !== "button"; // Aquí puedes ajustar según el tipo de elemento que desees filtrar
  });

  //270
  return (
    <Card sx={sx}>
      <CardContent sx={{ flex: "1 0 auto" }}>
        {contentChildren}
        <CardActions>{actionsChildren}</CardActions>
      </CardContent>
    </Card>
  );
};
export default CardComponent;
