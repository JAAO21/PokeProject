import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
//provider context
import { ModalProvider } from "./Context/ModalContext.tsx";
//use redux store;
import store from "./Store/Store";
// authProvider autntication
import AuthProvider from "./Layout/AuthProvider/AuthProvider";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
