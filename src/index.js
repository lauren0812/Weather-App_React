import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import Link from "./Link";
import FormattedDate from "./FormattedDate";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather Forecast</h1>
    <Search />
    <FormattedDate />
    <Link />
  </StrictMode>
);
