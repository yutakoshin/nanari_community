import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0hBIy5NBdN0KUr8Y8etcHzdfRc-PpnJs",
    authDomain: "nanari-110.firebaseapp.com",
    projectId: "nanari-110",
    storageBucket: "nanari-110.appspot.com",
    messagingSenderId: "834256891652",
    appId: "1:834256891652:web:aa0efc8faddafbc14f2a51"
  };

  if (firebase.apps.length == 0) {
      firebase.initializeApp(firebaseConfig)
  }