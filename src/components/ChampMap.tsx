import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import ChampImage from "../mushroom-15x15.png";
import { Champs, EventClickMap } from "../types/apiType";

export const ChampsMap = ({
  champs,
  onClick,
}: {
  champs: Champs[];
  onClick?: (e: EventClickMap) => void;
}) => (
  <LoadScript
    libraries={["visualization"]}
    googleMapsApiKey="AIzaSyDGt9y_yhWZOomFemdI4cNj_AifW_CLXnc"
  >
    <GoogleMap
      onClick={onClick}
      mapContainerStyle={{ height: "100%", width: "100%" }}
      zoom={13}
      center={{ lat: 49.1707458, lng: 1.9994698 }}
    >
      {champs.map((champ, index) => (
        <Marker icon={ChampImage} key={index} position={champ.position} />
      ))}
    </GoogleMap>
  </LoadScript>
);
