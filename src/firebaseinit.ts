
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC2kutBl0p0OYEnebtackg0biZIUOG-QBg",
    authDomain: "recipe-manager-e0544.firebaseapp.com",
    databaseURL: "https://recipe-manager-e0544.firebaseio.com",
    projectId: "recipe-manager-e0544",
    storageBucket: "recipe-manager-e0544.appspot.com",
    messagingSenderId: "66118028606",
    appId: "1:66118028606:web:1e06d286f56799217b306f",
    measurementId: "G-VTNKVC8PST"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;