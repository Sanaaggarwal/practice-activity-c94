var firebaseConfig = {
    apiKey: "AIzaSyB8rB0ZCKzKwmg_hIiM387TeJxpleqgGPI",
    authDomain: "practice-activity-c94.firebaseapp.com",
    databaseURL: "https://practice-activity-c94-default-rtdb.firebaseio.com",
    projectId: "practice-activity-c94",
    storageBucket: "practice-activity-c94.appspot.com",
    messagingSenderId: "382643190913",
    appId: "1:382643190913:web:1511bf6a381fa9a4606180",
    measurementId: "G-J2LW5LC3JL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser(){
    username=document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
    purpose:"adduser"
    });
}