import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";

export const ChampBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">News</Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);
