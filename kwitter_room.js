
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAf1smGrdOZrdCUNuL9SYI4Q5gBzzxqLP4",
    authDomain: "sushrut-cwdo.firebaseapp.com",
    databaseURL: "https://sushrut-cwdo-default-rtdb.firebaseio.com",
    projectId: "sushrut-cwdo",
    storageBucket: "sushrut-cwdo.appspot.com",
    messagingSenderId: "486456856337",
    appId: "1:486456856337:web:f5ccd42c792c5a1e7486b0",
    measurementId: "G-HW4JPSHK70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


user_name = localStorage.getItem("username");
document.getElementById("user-name").innerHTML = "Welcome "  + user_name + "!";
function addRoom(){
	room_name = document.getElementById("add_room").value;
	firebase.database().ref("/").child(room_name).update({
		purpose: "add-room"
	});
	
	localStorage.setItem("room_name", room_name);
	window.location = "kwitter_page.html";
}


function getData() {
	firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
	
       Room_names = childKey;
      //Start code
		console.log(Room_names);
		output = "<div class='room_names' id = " + Room_names + " onclick = 'redirect(this.id)'>#" + Room_names + " </div><hr>";
		 document.getElementById("output").innerHTML = output;
      //End code
      });});}


getData();


function redirect(name){
	console.log("Redirect room name " + name);
	localStorage.setItem("room_name", name);
	window.location = "kwitter_page.html";
}

function logout(){
	localStorage.removeItem("username");
	localStorage.removeItem("room_name")
	window.location = "index.html";
}