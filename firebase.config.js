import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSMmThFV5Vvli0QlA1dmx8wXp9kV3_ieE",
  authDomain: "food-restaurant-app-ff01c.firebaseapp.com",
  databaseURL: "https://food-restaurant-app-ff01c-default-rtdb.firebaseio.com",
  projectId: "food-restaurant-app-ff01c",
  storageBucket: "food-restaurant-app-ff01c.appspot.com",
  messagingSenderId: "196680788313",
  appId: "1:196680788313:web:a6817f0de15591047c4448",
  measurementId: "G-T6SBWBLJT9"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
