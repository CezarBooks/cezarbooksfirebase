// init firebase app

import { FirebaseApp, initializeApp } from "firebase/app";

var app: FirebaseApp | null = null;

export const initApp = (): void => {
  app = initializeApp({
    apiKey: "AIzaSyDMeO1HjkVpWxWHvBWX8zRwr25DglJRsDM",
    authDomain: "cezarbooks-34e63.firebaseapp.com",
    projectId: "cezarbooks-34e63",
    storageBucket: "cezarbooks-34e63.appspot.com",
    messagingSenderId: "882227868584",
    appId: "1:882227868584:web:538f7a45416288762fa39d",
    measurementId: "G-7YHCEX6QJ7",
  });

  console.info("Firebase initiated ");
};

export const getApp = (): FirebaseApp | null => {
  return app;
};
