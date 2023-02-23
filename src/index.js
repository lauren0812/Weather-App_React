import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Hosted from "./Hosted";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather Forecast</h1>
    <Search />
    <Hosted />
  </StrictMode>
);
