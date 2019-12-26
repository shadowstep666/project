window.onload = () =>{
  var firebaseConfig = {
    apiKey: "AIzaSyCSElJvdwEQlqpnVOUcROdMYWWqbZsrooU",
    authDomain: "project1-c5a65.firebaseapp.com",
    databaseURL: "https://project1-c5a65.firebaseio.com",
    projectId: "project1-c5a65",
    storageBucket: "project1-c5a65.appspot.com",
    messagingSenderId: "657411126998",
    appId: "1:657411126998:web:53cdd12774ebf468bf3b77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  view.setActiveScreen('login');
}

