import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ChampSpecies } from "../types/index.ts";
import { MenuItem, Select } from "@material-ui/core";

export const AddChampDialog = ({
  onClose,
  open,
}: {
  onClose: (champ: ChampSpecies, save: boolean) => void;
  open: boolean;
}) => {
  const [champSepcie, setChampSpecie] = useState<ChampSpecies>(
    ChampSpecies.CEPE
  );

  const handleClose = (save: boolean) => {
    onClose(champSepcie, save);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Epèce de champigon !</DialogContentText>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={champSepcie}
          onChange={(e: any) => setChampSpecie(e.target.value)}
        >
          {Object.values(ChampSpecies).map((s) => (
            <MenuItem value={s}>{s}</MenuItem>
          ))}
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => handleClose(true)} color="primary">
          Enregistrer
        </Button>
      </DialogActions>
    </Dialog>
  );
};
