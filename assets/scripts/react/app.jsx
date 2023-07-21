// Unfortunately it appears that it's impossible to enable ESBuild's
// --jsx=automatic mode (https://esbuild.github.io/content-types/#auto-import-for-jsx)
// via Hugo Pipes. So we'll have to remember to manually import React
import React from "react";
import { createRoot } from "react-dom/client";
import components from "./components";

components.forEach((component) => {
  const instances = document.querySelectorAll(component.selector);

  instances.forEach((instance) => {
    const data = JSON.parse(instance.getAttribute("data-props"));
    createRoot(instance).render(<component.component {...data} />);
  });
});
