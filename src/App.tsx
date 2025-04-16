// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "./contexts/theme/ThemeContext";

import Hero_Section from "./components/hero/Hero_Section";
import CircularGallery from "./components/circular-gallery/CircularGallery";
import Services_Section from "./components/services/Servies_Section";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Hero_Section />
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <Services_Section/>
    </MuiThemeProvider>
  );
}

export default App;
