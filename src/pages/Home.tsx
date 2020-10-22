import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { ChampBar } from "../components/ChampBar";
import { ChampList } from "../components/ChampList";
import { ChampsMap } from "../components/ChampMap";
import { Champs, ChampSpecies } from "../types/index.ts";
import { AddChampDialog } from "../components/AddChampDialog";

const defaultCenter = { lat: 49.1707458, lng: 1.9994698 };

export const Home = () => {
  const [openChampDialog, setOpenChampDialog] = useState(false);
  const [position, setPosition] = useState(defaultCenter);
  const [champs, setChamps] = useState<Champs[]>([
    {
      specie: ChampSpecies.CEPE,
      position: { lat: 49.1707458, lng: 1.9994698 },
    },
    {
      specie: ChampSpecies.GIROLLE,
      position: { lat: 49.1707458, lng: 1.9994698 },
    },
    {
      specie: ChampSpecies.PIED_BLEU,
      position: { lat: 49.1709, lng: 1.9994698 },
    },
  ]);

  const saveChamp = (champ: Champs) => {
    setChamps([...champs, champ]);
  };

  return (
    <>
      <ChampBar />
      <Container maxWidth="lg" style={{ height: "90%" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid xs={8} item>
            <div style={{ height: "100%", width: "100%" }}>
              <ChampsMap
                center={defaultCenter}
                onClick={(e) => {
                  setOpenChampDialog(true);
                  setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                }}
                champs={champs}
              />
            </div>
          </Grid>
          <Grid xs={4} item>
            <ChampList champs={champs}></ChampList>
          </Grid>
        </Grid>
      </Container>
      <AddChampDialog
        open={openChampDialog}
        onClose={(s, save) => {
          if (save) {
            saveChamp({
              position,
              specie: s,
            });
          }
          setOpenChampDialog(false);
        }}
      />
    </>
  );
};
