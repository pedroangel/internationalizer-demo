import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

i18n.on("initialized", () => {
  root.render(
    <React.StrictMode>
      <I18nextProvider i18next={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
});
