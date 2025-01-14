import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router";
import "@fontsource/onest";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/config/theme";
import { CoffeeProvider } from "./context/CoffeeProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CoffeeProvider>
        <Router />
      </CoffeeProvider>
    </ThemeProvider>
    <ToastContainer />
  </StrictMode>
);
