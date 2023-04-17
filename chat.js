// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCmf5HUuHe2o9bUxKui8dEnj4VLAx1nGzc",
    authDomain: "project-chat-app-a42bf.firebaseapp.com",
    databaseURL: "https://project-chat-app-a42bf-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-a42bf",
    storageBucket: "project-chat-app-a42bf.appspot.com",
    messagingSenderId: "222291507352",
    appId: "1:222291507352:web:176b042ed4315d440d78ed"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html"
}



