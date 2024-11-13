//manejo de paquetes para enrutar
import { Routes, Route } from "react-router-dom";

//views privates
import { routePrivate } from "./DataRoute";

//layout
import MainLayout from "../../Layout/MainLayout/MainLayoutPrivate";

const HandleRoutesPrivates = () => {
  return (
    <MainLayout>
      <Routes>
        {routePrivate.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default HandleRoutesPrivates;
