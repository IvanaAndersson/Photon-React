import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { ThemeContextProvider } from "./themeContext.js";

ReactDOM.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>,
  document.getElementById("app")
);
