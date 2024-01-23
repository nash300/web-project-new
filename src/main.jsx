// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CommonContextProvider } from "./context_files/commonContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommonContextProvider>
      <App />
    </CommonContextProvider>
  </React.StrictMode>
);
