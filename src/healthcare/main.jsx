import React from "react";
import { createRoot } from "react-dom/client";
import * as T from "../brand/tokens";
import HealthcarePage from "./HealthcarePage";
import "./healthcare.css";

/* Brand tokens → CSS variables (single source: src/brand/tokens.js) */
const vars = {
  "--ink": T.INK, "--cream": T.CREAM, "--eau": T.EAU, "--eau-l": T.EAU_L, "--muted": T.KV_MUTED, "--grey": T.OFF_W,
  "--head": T.HEAD, "--body": T.BODY, "--ease": T.EASE, "--maxw": T.MAX_W, "--gutter": T.GUTTER,
};
Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthcarePage />
  </React.StrictMode>
);
