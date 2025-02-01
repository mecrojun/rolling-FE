import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import HeaderService from "./components/HeaderService/HeaderService.jsx";

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <HeaderService />
  </StrictMode>
);
