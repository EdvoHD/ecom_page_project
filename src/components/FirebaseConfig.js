// importerar från npm package kallad "firebase" för att hantera request ifrån firebase lättare.
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// --SETUP för firebase--
// SDK ifrån Firebase
// npm i -g firebase-tools paketet 
// npm i firebase 
// npm i dotenv som då sköter läsningen av .env - filerna eftersom det inte är javascript i den filen.

require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY, // hur skyddar vi denna api key, via .env filer
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: "https://test-app-ab80b.firebaseio.com",
    projectId: "test-app-ab80b",
    storageBucket: "test-app-ab80b.appspot.com",
    messagingSenderId: "522789891200",
    appId: "1:522789891200:web:b6ff165995d953a9b90a65",
    measurementId: "G-8QD0W6W7CH"
  };

  console.log(firebaseConfig.apiKey);
  console.log(process.APIKEY);
  

  // Initialize firebase med variabeln firebaseConfig
  firebase.initializeApp(firebaseConfig);

  // Denna är deprecated och kommer tas bort i framtida updates
  // https://firebase.google.com/docs/reference/js/firebase.firestore.Settings#timestampsinsnapshots
  //firebase.firestore().settings({timestampsInSnapshots:true});

  // object destructuring
  // Googleprovider för inlogg via google 
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;


  // Private och Public keys , sök upp RSA krypterings teknik


/* 
db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
*/