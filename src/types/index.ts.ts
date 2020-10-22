export enum ChampSpecies {
  CEPE = "Cêpe",
  GIROLLE = "Girolle",
  PIED_BLEU = "Pied-bleu",
  ROSE = "Rosé",
}

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
