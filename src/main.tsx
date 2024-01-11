import "@/index.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      appearance="light"
      accentColor="lime"
      panelBackground="translucent"
      radius="none"
      scaling="90%"
    >
      <App />
    </Theme>
  </React.StrictMode>,
);
