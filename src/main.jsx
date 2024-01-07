import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpR2tGfV5yd0VCal1TTndfUiweQnxTdEZiWX1XcHBURGFcVkNzWw=="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
