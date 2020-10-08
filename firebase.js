import * as firebase from 'firebase';

import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyD0vFuufVM3U4xRmhL9jB4Why3jG6mKeE0",
  authDomain: "react-native-scheduler-7cc08.firebaseapp.com",
  databaseURL: "https://react-native-scheduler-7cc08.firebaseio.com",
  projectId: "react-native-scheduler-7cc08",
  storageBucket: "react-native-scheduler-7cc08.appspot.com",
  messagingSenderId: "157871018013",
  appId: "1:157871018013:web:913269b59a82d4346976f4"
};

firebase.initializeApp(firebaseConfig);

export { firebase };