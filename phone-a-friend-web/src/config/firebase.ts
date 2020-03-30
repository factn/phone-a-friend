import * as firebase from "firebase";
import config from "./environment";

// Initialize Firebase and Firebase Analytics
const app = firebase.initializeApp(config.firebaseConfig);
const analytics = firebase.analytics();

export const firebaseApp = app;
export const firebaseAnalytics = analytics;
export default firebase;
