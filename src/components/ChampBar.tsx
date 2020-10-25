import { IconButton, Toolbar, Typography, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useUserContext } from "../App";

import React from "react";

export const ChampBar = () => {
  const currentUser = useUserContext();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {currentUser && <span>{currentUser.displayName}</span>}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
