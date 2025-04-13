// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "./contexts/theme/ThemeContext";

import Hero_Section from "./components/hero/Hero_Section";
function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Hero_Section />
    </MuiThemeProvider>
  );
}

export default App;
