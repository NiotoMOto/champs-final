import { Container, Grid } from "@material-ui/core";
import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import { ChampBar } from "../components/ChampBar";
import { ChampList } from "../components/ChampList";
import { ChampsMap } from "../components/ChampMap";
import { Champs, ChampSpecies } from "../types";
import { AddChampDialog } from "../components/AddChampDialog";
import { champsCollection, db } from "../firebase";

const defaultCenter = { lat: 49.1707458, lng: 1.9994698 };

export const Home = () => {
  const [openChampDialog, setOpenChampDialog] = useState(false);
  const [position, setPosition] = useState<firebase.firestore.GeoPoint>();
  const [champs, setChamps] = useState<Champs[]>([]);

  const saveChamp = (champ: Champs) => {
    champsCollection.add(champ);
  };

  const getChamps = async () => {
    const champs = await champsCollection.get();
    setChamps(champs.docs.map((d) => d.data()));
  };

  useEffect(() => {
    getChamps();
  }, []);

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
                  setPosition(
                    new firebase.firestore.GeoPoint(
                      e.latLng.lat(),
                      e.latLng.lng()
                    )
                  );
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
          if (save && position) {
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
