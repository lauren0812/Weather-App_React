import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather Forecast</h1>
    <Search />
  </StrictMode>
);
<p>
  Hosted by :
  <a href="https://github.com/lauren0812/Weather-App_React.git"> GitHub</a>
</p>;
