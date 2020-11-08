import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDrPmoZH7k238-qu1WRs51rzoNSRmYJ-mg",
    authDomain: "login-5eefe.firebaseapp.com",
    databaseURL: "https://login-5eefe.firebaseio.com",
    projectId: "login-5eefe",
    storageBucket: "login-5eefe.appspot.com",
    messagingSenderId: "144249240337",
    appId: "1:144249240337:web:3ad9578e185b79363f2ab0"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;