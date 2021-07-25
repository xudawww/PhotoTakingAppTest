//Get credentials and initialize the app
var firebaseConfig = {
    apiKey: "AIzaSyBMVz8Mms49TvPWpUtTpO_AUBhTCLrSIuA",
    authDomain: "photoapp-856f0.firebaseapp.com",
    databaseURL: "https://photoapp-856f0-default-rtdb.firebaseio.com",
    projectId: "photoapp-856f0",
    storageBucket: "photoapp-856f0.appspot.com",
    messagingSenderId: "241168363262",
    appId: "1:241168363262:web:fef4a8c01c65e18a72ffaf"
};
firebase.initializeApp(firebaseConfig);
//There are 2 globale variable for firebase query/update or fire storage write.
var database = firebase.database();
var storage = firebase.storage().ref();