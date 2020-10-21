import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { ChampBar } from "../components/ChampBar";
import { ChampList } from "../components/ChampList";
import { ChampsMap } from "../components/ChampMap";
import { Champs } from "../types/apiType";

export const Home = () => {
  const [champs, setChamps] = useState<Champs[]>([
    {
      specie: "Cêpe",
      position: { lat: 49.1707458, lng: 1.9994698 },
    },
    {
      specie: "Girolle",
      position: { lat: 49.1707458, lng: 1.9994698 },
    },
    {
      specie: "Rosé",
      position: { lat: 49.1709, lng: 1.9994698 },
    },
  ]);

  return (
    <>
      <ChampBar />
      <Container maxWidth="lg" style={{ height: "90%" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid xs={8} item>
            <div style={{ height: "100%", width: "100%" }}>
              <ChampsMap
                onClick={(e) => {
                  setChamps([
                    ...champs,
                    {
                      specie: "Pied-bleu",
                      position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
                    },
                  ]);
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
    </>
  );
};
