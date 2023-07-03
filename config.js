import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCeWIPx4_4EBdY0NC-TWVKxcTzqY4QzgWw",
  authDomain: "e-ride-ed633.firebaseapp.com",
  projectId: "e-ride-ed633",
  storageBucket: "e-ride-ed633.appspot.com",
  messagingSenderId: "1034968306806",
  appId: "1:1034968306806:web:64b99a09ff63b37faf7b57"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
