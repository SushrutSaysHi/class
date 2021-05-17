//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
	message = document.getElementById("message").value;
	firebase.database().ref(room_name).push({
		name: user_name, 
		message: message,
		like: 0
	});
	
	document.getElementById("message").value = " ";
	
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
