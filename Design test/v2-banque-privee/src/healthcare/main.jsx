import React from "react";
import { createRoot } from "react-dom/client";
import * as T from "../brand/tokens";
import HealthcarePage from "./HealthcarePage";
import "./healthcare.css";

/* Brand tokens → CSS variables (single source: src/brand/tokens.js) */
const vars = {
  "--bg": T.HC_BG, "--bg2": T.HC_BG2, "--text": T.HC_TEXT, "--muted": T.HC_MUTED,
  "--serif": T.HC_SERIF, "--sans": T.HC_SANS, "--ease": T.EASE,
};
Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthcarePage />
  </React.StrictMode>
);
