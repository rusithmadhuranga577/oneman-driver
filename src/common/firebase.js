import firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';

if(!firebase.apps.length){
    var firebaseConfig = {
        apiKey: "AIzaSyBrcBilT0Bojm2bjtqY4-DoXbG-jvebSaw",
        authDomain: "gamigedara-restaurant.firebaseapp.com",
        databaseURL: "https://gamigedara-restaurant.firebaseio.com",
        projectId: "gamigedara-restaurant",
        storageBucket: "gamigedara-restaurant.appspot.com",
        messagingSenderId: "42762889166",
        appId: "1:42762889166:android:45669a0bf3677f92ca2d9f",
    };
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
  }else{
    firebase.app();
  }


export default firebase;