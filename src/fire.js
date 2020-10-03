import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCoJ7YgsbbAazmvGWeDx-YHzjHRZdJJsms",
    authDomain: "compare-6cc53.firebaseapp.com",
    databaseURL: "https://compare-6cc53.firebaseio.com",
    projectId: "compare-6cc53",
    storageBucket: "compare-6cc53.appspot.com",
    messagingSenderId: "116075501488",
    appId: "1:116075501488:web:796ba0473c1c2aa8982875",
    measurementId: "G-XEQXBTTP8W"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(config);
  firebase.analytics();
  export default fire;