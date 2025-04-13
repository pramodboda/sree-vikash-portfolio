// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "./contexts/theme/ThemeContext";

import Hero_Section from "./components/hero/Hero_Section";
import CircularGallery from "./components/circular-gallery/CircularGallery";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Hero_Section />
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
