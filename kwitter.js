function add(){
	var username = document.getElementById("user_name").value;
	password = document.getElementById("password").value
	localStorage.setItem("username", username);
	
	if( document.getElementById("user_name").value  != null &&  document.getElementById("password").value != null){
		window.location = "kwitter_room.html";
	}else if( document.getElementById("user_name").value  ==  null &&  document.getElementById("password").value ==  null){
		window.alert("You must enter a username and password");
	}
	
}