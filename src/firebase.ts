import * as firebase from "firebase/app";
import "firebase/firestore";
import { Champs } from "./types";

export const firebaseConfig = {
  apiKey: "AIzaSyBAXQuC3Vjf6SUMoOCP47yi3y3nDypeLlM",
  authDomain: "champs-c9b9c.firebaseapp.com",
  databaseURL: "https://champs-c9b9c.firebaseio.com",
  projectId: "champs-c9b9c",
  storageBucket: "champs-c9b9c.appspot.com",
  messagingSenderId: "296081960637",
  appId: "1:296081960637:web:0c2a5b15012103c4c591d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const champsCollection = db.collection(
  "champs"
) as firebase.firestore.CollectionReference<Champs>;
