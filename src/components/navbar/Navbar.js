/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../assets/image/logo-rounded.png";

import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

const Navbar = ({ themeMode, toggleTheme }) => {
  return (
    <>
      <Grid container sx={{ padding: 2, justifyContent: "space-between" }}>
        {/* <IconButton> */}
        <img src={Logo} alt="logo" style={{ width: 50, height: 50 }} />
        {/* </IconButton> */}
        <IconButton onClick={toggleTheme}>{themeMode === "light" ? <LightMode /> : <DarkMode />}</IconButton>
      </Grid>
    </>
  );
};

export default Navbar;
