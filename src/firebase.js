import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCtn-XamcukgpebwaCQMFwwgBn4b4Zaplk",
  authDomain: "permisos-212ca.firebaseapp.com",
  databaseURL: "https://permisos-212ca.firebaseio.com",
  projectId: "permisos-212ca",
  storageBucket: "",
  messagingSenderId: "652555373390"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();