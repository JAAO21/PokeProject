//manejo de paquetes para enrutar
import { Routes, Route } from "react-router-dom";

//routes publics
import { dataRoute } from "./DataRoute";

import LinearProgress from "@mui/material/LinearProgress";
import { Suspense } from "react";

//layout
import MainLayout from "../../Layout/MainLayout/MainLayout";

import { ErrorBoundary } from "../../Components";
const HandleRoutesPublic = () => {
  return (
    <MainLayout>
      <ErrorBoundary>
        <Suspense fallback={<LinearProgress color="inherit" />}>
          <Routes>
            {dataRoute.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </MainLayout>
  );
};

export default HandleRoutesPublic;
