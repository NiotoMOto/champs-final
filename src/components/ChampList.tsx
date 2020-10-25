import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Champs } from "../types";

export const ChampList = ({ champs }: { champs: Champs[] }) => (
  <List aria-label="champs list">
    {champs.map((champ, index) => (
      <ListItem key={index}>{champ.specie}</ListItem>
    ))}
  </List>
);
