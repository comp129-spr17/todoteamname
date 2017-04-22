//api.js created by Nathan Stowe
//for the OverwatchLFG COMP55 Project

//This script gets the username from the HTML, and passes to api.php, which is run using it
//TODO: get data back into HTML, replace # with - in username

function getUserFromApi(){
	//get the username from html
	var username = document.getElementById('addUsername').value;

	//TODO:replace # with -


	//add str= for passing to the php function
	username = "str=" + username;

	$.post('/OverwatchLFG/php/api.php', username, function(players) {
		console.log(players);
		
	}
	);
}

