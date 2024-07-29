/* eslint-disable no-unused-vars */
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Hero from "./view/hero/Hero";
import About from "./view/about/About";
import Experience from "./view/experience/Experience";

import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./assets/theme/Theme";
import Transition from "./view/transition/Transition";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Hero themeMode={themeMode} toggleTheme={toggleTheme} />
      <Transition>
        <About />
      </Transition>
      <Transition>
        <Experience />
      </Transition>
    </ThemeProvider>
  );
};

export default App;
