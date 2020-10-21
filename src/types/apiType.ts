export type ChampSpecies = "Cêpe" | "Girolle" | "Pied-bleu" | "Rosé";
type Position = { lat: number; lng: number };

export type Champs = {
  specie: ChampSpecies;
  position: Position;
};

export type EventClickMap = {
  latLng: {
    lat: () => number;
    lng: () => number;
  };
};
