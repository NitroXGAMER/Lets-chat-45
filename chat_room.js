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


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "     +user_name +"!";

    function addRoom(){
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "chat_room.html";
      }


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("Room Name-"+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
 
       //End code
       });});}
      getData();


      function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "chat_page.html"
      }

      function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
      }