//manejo de paquetes para enrutar
import { Routes, Route } from "react-router-dom";

//routes publics
import { dataRoute } from "./DataRoute";

//layout
import MainLayout from "../../Layout/MainLayout/MainLayout";
const HandleRoutesPublic = () => {
  return (
    <MainLayout>
      <Routes>
        {dataRoute.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default HandleRoutesPublic;
