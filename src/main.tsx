import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";
import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { themeConfig } from "./assets/styles/themeConfig";
import "antd/dist/reset.css"; 


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
