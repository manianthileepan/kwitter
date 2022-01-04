
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerhtml+=row;
      //End code
      });});}
getData();
user_name=localStorage.getItem("username")
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addroom(){
  var  roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
      purpose:"addingroomname"
  });
  
  localStorage.setitem("room_name",roomname);
  window.locaion=("kwitter_page.html")}

  function redirectToRoomName(name){
localStorage.setitem("room_name",name);
window.locaion= "kwiter_page.html"
  }

  function logout(){
        localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location="index.html";
  }