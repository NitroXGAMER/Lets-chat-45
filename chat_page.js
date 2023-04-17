var firebaseConfig = {
    apiKey: "AIzaSyCmf5HUuHe2o9bUxKui8dEnj4VLAx1nGzc",
    authDomain: "project-chat-app-a42bf.firebaseapp.com",
    databaseURL: "https://project-chat-app-a42bf-default-rtdb.firebaseio.com",
    projectId: "project-chat-app-a42bf",
    storageBucket: "project-chat-app-a42bf.appspot.com",
    messagingSenderId: "222291507352",
    appId: "1:222291507352:web:176b042ed4315d440d78ed"
  };



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"</h4>";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)>Likes :" + like+"</button>";
row = name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code
 } });  }); }
getData();

function updateLike(message_id){
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location.replace("index.html");
    }
