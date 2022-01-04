//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDEWqVHdRC-G3Oka2Qm13EHUOnLTaQ1kLc",
      authDomain: "kwitter-f274c.firebaseapp.com",
      databaseURL: "https://kwitter-f274c-default-rtdb.firebaseio.com",
      projectId: "kwitter-f274c",
      storageBucket: "kwitter-f274c.appspot.com",
      messagingSenderId: "874822627644",
      appId: "1:874822627644:web:7f00c4e2129cb38bd9ee39"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage,getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log( message_data);

var name=message_data['name'];
var message=message_data['message'];
var like=message_data['like'];

name_with_tag = "<h4> "+ Name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

var  row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row

//End code
      } });  }); }
getData();
function updateLike(message_id){
button_id=message_id;
like=document.getElementById(button_id).value;

updatedlikes = Number(like)+1;

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}