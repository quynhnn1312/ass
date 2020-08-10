import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCE7KQRD7yt-37mN5R5xYEZZaGAwnCuDI8",
  authDomain: "react-pt14315-2020.firebaseapp.com",
  databaseURL: "https://react-pt14315-2020.firebaseio.com",
  projectId: "react-pt14315-2020",
  storageBucket: "react-pt14315-2020.appspot.com",
  messagingSenderId: "508740695323",
  appId: "1:508740695323:web:3ec6de54822b22448fcfbe",
  measurementId: "G-Q5PTKTE42N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export {
  storage, firebase as default
}