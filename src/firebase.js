import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyD7w49kVEmM0NL5giT9x5ozoXSfZ4tDFjU",
        authDomain: "user-2feeb.firebaseapp.com",
        databaseURL: "https://user-2feeb-default-rtdb.firebaseio.com",
        projectId: "user-2feeb",
        storageBucket: "user-2feeb.appspot.com",
        messagingSenderId: "351663120907",
        appId: "1:351663120907:web:fb28f6bea81a3f1171dd0e",
        measurementId: "G-5XJ07ZML2R"
    
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    
     export default db;

