import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ChampImage from "../mushroom-15x15.png";
import { Champs, EventClickMap } from "../types";

export const ChampsMap = ({
  champs,
  onClick,
  center,
}: {
  champs: Champs[];
  onClick?: (e: EventClickMap) => void;
  center: { lat: number; lng: number };
}) => (
  <LoadScript googleMapsApiKey="AIzaSyDGt9y_yhWZOomFemdI4cNj_AifW_CLXnc">
    <GoogleMap
      onClick={onClick}
      mapContainerStyle={{ height: "100%", width: "100%" }}
      zoom={13}
      center={center}
    >
      {champs.map((champ, index) => (
        <Marker key={index} icon={ChampImage} position={champ.position} />
      ))}
    </GoogleMap>
  </LoadScript>
);
