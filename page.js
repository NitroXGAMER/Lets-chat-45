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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
  firebase.database().ref(room_name).push({
   name:user_name,
   message : msg,
   like:0    
  });
}
