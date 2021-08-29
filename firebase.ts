import Constants from "expo-constants";
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const firestoreDatabase = firebase.firestore();
