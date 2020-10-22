import { List, ListItem } from "@material-ui/core";
import React from "react";
import { Champs } from "../types/index.ts";

export const ChampList = ({ champs }: { champs: Champs[] }) => (
  <List aria-label="champs list">
    {champs.map((champ) => (
      <ListItem>{champ.specie}</ListItem>
    ))}
  </List>
);
